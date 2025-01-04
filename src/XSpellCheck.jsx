import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const words = inputText.toLowerCase().split(' ');
    const misspelledWord = words.find(word => customDictionary.hasOwnProperty(word));

    if (misspelledWord) {
      setSuggestion(`Did you mean: ${customDictionary[misspelledWord]}?`);
    } else {
      setSuggestion('');
    }
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
        rows={5}
        cols={50}
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
