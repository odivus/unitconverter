import React, { useState, useEffect } from 'react';
import checkInput from '../../utilties/checkInput';

function InputTwo({ convertedValue, setConvertedValue, sendValueToParentState }) {
  const [inputValue, setInputValue] = useState(convertedValue);

  useEffect(() => {
    console.log('InputTwo Value' + inputValue);
    console.log('Converted Value' + convertedValue);
    if (convertedValue && !inputValue) setInputValue(convertedValue);

    // if (convertedValue) {
    //   if (!inputValue) setInputValue(convertedValue);
    // }
  }, [inputValue, convertedValue]);

  function handleOnChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (checkInput(value)) {
      // console.log('Check Input Value Ok');
      setInputValue(value);
      sendValueToParentState(value);
    }

    // if (!value) {
    //   setInputValue('');
    //   setConvertedValue('');
    // }
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

export default InputTwo;
