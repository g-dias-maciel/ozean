import React, { useState } from 'react';
import './LanguageSwitch.scss'

const LanguageSwitch = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onLanguageChange(newLanguage); // Callback function to notify parent component
  };

  return (
    <div className="language-switcher">
      <select value={selectedLanguage} onChange={handleChange}>
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
