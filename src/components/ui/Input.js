import React, { useState, useEffect } from 'react';
import checkInput from '../../utilties/checkInput';

function Input({ inputValueConverted, sendValueToParentState }) {
  const [inputValue, setInputValue] = useState(inputValueConverted);

  console.log(inputValue);
  
  useEffect(() => {
    console.log(inputValueConverted);
    if (inputValueConverted) setInputValue(inputValueConverted);
  }, [inputValue, inputValueConverted]);

  function handleOnChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (checkInput(value)) {
      console.log('Check Input Value Ok');
      setInputValue(value);
      sendValueToParentState(value);
    }
  }

  // console.log(inputValue);
  // console.log(inputValueConverted);

  return (
    <input 
      value={inputValue}
      type='text' 
      maxLength='19'
      onChange={handleOnChange} />
  );
}

export default Input;
