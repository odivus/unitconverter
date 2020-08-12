import React, { useState, useEffect } from 'react';
import checkInput from '../../utilties/checkInput';

function Input({ convertedValue, setConvertedValue, sendValueToParentState }) {
  const [inputValue, setInputValue] = useState(convertedValue);

  useEffect(() => {
    console.log('Input Value' + inputValue);
    console.log('Input Converted Value' + convertedValue);
    if (convertedValue && !inputValue) setInputValue(convertedValue);

    // if (convertedValue) {
    //   if (!inputValue) setInputValue(convertedValue);
    // }
  }, [inputValue, convertedValue]);

  function handleOnChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (!value) setConvertedValue('');

    if (checkInput(value)) {
      if (name === 'inputOne') {
        setInputOne(value);
        setInputTwo(convertedValue);
      } else {
        setInputTwo(value);
      }
    }

    if (!value) {
      setInputValue('');
      setConvertedValue('');
    }
  }

  console.log(name);
  console.log('Input One Value: ' + inputOne);
  console.log('Input Two Value: ' + inputTwo);
  console.log('Input One Converted Value: ' + convertedValue);

  return (
    <input 
      value={inputValue}
      type='text' 
      maxLength='19'
      onChange={handleOnChange} />
  );
}

export default Input;
