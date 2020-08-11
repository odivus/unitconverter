import React, { useState, useEffect } from 'react';
import checkInput from '../../utilties/checkInput';

function Input(props) {
  const { 
    name,
    inputOne, 
    inputTwo, 
    convertedValue, 
    setInputOne,
    setInputTwo,
    setConvertedValue, 
  } = props;
// 
  let inputValue = '';

  // inputValue = inputTwo ? convertedValue : inputOne;

  if (inputOne) {
    inputValue = inputOne;
  }

  if (inputTwo) {
    inputValue = inputTwo;
  }

  // if (inputTwo) {
  //   inputValue = convertedValue;
  // } else {
  //   inputValue = inputOne;
  // }

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
