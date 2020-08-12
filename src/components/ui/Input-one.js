import React from 'react';
import checkInput from '../../utilties/checkInput';

function InputOne(props) {
  const {
    inputValue,
    // inputOne,
    setInput,
    // setInputOne,
    // setInputTwo,
    setActiveInput,
    convertedValue,
    setConvertedValue,
    resetValues,
  } = props;

  console.log('InputOne Value ' + inputValue);
  console.log('Converted Value ' + convertedValue);

  function onChange(e) {
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
      onChange={onChange} />
  );
}

export default InputOne;
