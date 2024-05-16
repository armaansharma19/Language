import React, { useState } from 'react';
import './App.css';
import FlipCard from './components/card';
import InputPage from './components/inputpage';

function App(props) {
  const [showFlipCard, setShowFlipCard] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(() => {
    const storedData = localStorage.getItem('questionsAndAnswers');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlashCardClick = () => {
    setShowFlipCard(true);
    setIsFlipped(false);
    setCurrentIndex(0);
  };

  const handleBackButtonClick = () => {
    setShowFlipCard(false);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSave = () => {
    const updatedQuestionsAndAnswers = [
      ...questionsAndAnswers,
      { question: question, answer: answer }
    ];
    setQuestionsAndAnswers(updatedQuestionsAndAnswers);
    localStorage.setItem('questionsAndAnswers', JSON.stringify(updatedQuestionsAndAnswers));
    setQuestion('');
    setAnswer('');
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < questionsAndAnswers.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleShuffleClick = () => {
    const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false);
  };

  return (
    <div>
      <button className='home1' onClick={()=>{props.setloc("hero")}}>Home</button>
      {showFlipCard && (
        <div className="app-container">
          <div className="question-list">
            <h3>Question List</h3>
            <ul>
              {questionsAndAnswers.map((item, index) => (
                <li key={index} onClick={() => setCurrentIndex(index)}>
                  {item.question}
                </li>
              ))}
            </ul>
          </div>
          <div className="content-container">
            <button className='btn1' onClick={handleBackButtonClick}>Back</button>
            <FlipCard
              question={questionsAndAnswers[currentIndex].question}
              answer={questionsAndAnswers[currentIndex].answer}
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
            />
            <div>
              <button className='btn1' onClick={handlePreviousClick}>Previous</button>
              <button className='btn1' onClick={handleShuffleClick}>Shuffle</button>
              <button className='btn1' onClick={handleNextClick}>Next</button>
            </div>
          </div>
        </div>
      )}
      {!showFlipCard && (
        <div>
          <InputPage
            question={question}
            answer={answer}
            onQuestionChange={handleQuestionChange}
            onAnswerChange={handleAnswerChange}
            onSave={handleSave}
            options={questionsAndAnswers.map((item) => item.question)} // Pass options from local storage
            onDelete={(selectedOption) => {
              const updatedQuestionsAndAnswers = questionsAndAnswers.filter(
                (item) => item.question !== selectedOption
              );
              setQuestionsAndAnswers(updatedQuestionsAndAnswers);
              localStorage.setItem('questionsAndAnswers', JSON.stringify(updatedQuestionsAndAnswers));
            }}
          />
          <button className='button-flash' onClick={handleFlashCardClick}>FlashCard</button>
        </div>
      )}
    </div>
  );
}

export default App;
