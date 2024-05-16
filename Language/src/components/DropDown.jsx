import React, { useState } from 'react';
import './DropDown.css'; // Import your CSS file for styling

const DropDown = ({ options, onDelete }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDeleteClick = () => {
    onDelete(selectedOption);
  };

  return (
    <div className="dropdown-container">
      <select className="dropdown-select" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default DropDown;
