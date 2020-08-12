import React from 'react';
import checkInput from '../../utilties/checkInput';

function Input(props) {
  const {
    inputValue,
    setInput,
    setActiveInput,
    convertedValue,
    setConvertedValue,
    resetValues,
  } = props;

  console.log('Input Value ' + inputValue);
  console.log('Converted Value ' + convertedValue);

  function onChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (!value) resetValues();

    if (value) {
      if (checkInput(value)) {
        setInput(value);
        setConvertedValue(convertedValue);
      }
    }
  }

  return (
    <input
      value={inputValue}
      type='text'
      maxLength='19'
      onFocus={setActiveInput}
      onChange={onChange} />
  );
}

export default Input;
