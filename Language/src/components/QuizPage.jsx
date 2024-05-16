import React, { useState } from 'react';

const QuizPage = ({ questionsAndAnswers, onBackClick }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (!questionsAndAnswers || questionsAndAnswers.length === 0) {
      // Handle empty or undefined questionsAndAnswers
      return;
    }

    const currentQuestion = questionsAndAnswers[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setShowResult(true); // Correct answer
    } else {
      setShowResult(false); // Incorrect answer
    }

    setSelectedOption(''); // Reset selected option for the next question
    if (currentQuestionIndex < questionsAndAnswers.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      // You can implement logic here for quiz completion
    }
  };

  return (
    <div>
      {showResult && <p>You are correct!</p>}
      <h2>Quiz Page</h2>
      {questionsAndAnswers && questionsAndAnswers.length > 0 && currentQuestionIndex < questionsAndAnswers.length && (
        <div>
          <h3>{questionsAndAnswers[currentQuestionIndex].question}</h3>
          <form>
            {questionsAndAnswers[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </form>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
      {currentQuestionIndex === questionsAndAnswers.length && (
        <div>
          <p>Quiz completed!</p>
          {/* You can add logic here for showing the quiz results */}
        </div>
      )}
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default QuizPage;
