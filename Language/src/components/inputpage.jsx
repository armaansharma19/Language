import React from 'react';
import './InputPage.css';
import DropDown from './DropDown'; // Import the DropDown component

const InputPage = ({ question, answer, onQuestionChange, onAnswerChange, onSave, options, onDelete }) => {
  return (
    <div className="input-page-container">
      <div className="input-form">
        <h2>Question and Answer Form</h2>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={onQuestionChange}
        />
        <br />
        <label htmlFor="answer">Answer:</label>
        <input
          type="text"
          id="answer"
          value={answer}
          onChange={onAnswerChange}
        />
        <br />
        <button onClick={onSave} className="save-button">Save</button>
      </div>
      <div className="dropdown-container">
        <DropDown options={options} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default InputPage;
