import React from 'react';
import checkInput from '../../utilties/checkInput';

function InputTwo(props) {
  const {
    inputValue,
    setInput,
    // inputTwo,
    // setInputOne,
    // setInputTwo,
    setActiveInput,
    convertedValue,
    setConvertedValue,
    resetValues,
  } = props;

  console.log('InputTwo Value ' + inputValue);
  console.log('Converted Value ' + convertedValue);

  // let inputTwoValue = '';
  // inputTwoValue = !inputTwo ? convertedValue : inputTwo;

  function handleOnChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (value) {
      if (checkInput(value)) {
        setInput(value);
        setConvertedValue(convertedValue);
      }
    }

    if (!value) {
      resetValues();
      // setInputOne('');
      // setInputTwo('');
      // setConvertedValue('');
    }
  }

  return (
    <input
      value={inputValue}
      type='text'
      maxLength='19'
      onFocus={setActiveInput}
      // onBlur={() => setActiveInput('')}
      onChange={handleOnChange} />
  );
}

export default InputTwo;
