import React from 'react';
import checkInput from '../../utilties/checkInput';

function InputTwo(props) {
  const {
    inputTwo,
    setInputOne,
    setInputTwo,
    setActiveInput,
    convertedValue,
    setConvertedValue,
  } = props;

  console.log('InputTwo Value ' + inputTwo);
  console.log('Converted Value ' + convertedValue);

  let inputTwoValue = '';
  inputTwoValue = !inputTwo ? convertedValue : inputTwo;

  function handleOnChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (value) {
      if (checkInput(value)) {
        setInputTwo(value);
        setConvertedValue(convertedValue);
      }
    }

    if (!value) {
      setInputOne('');
      setInputTwo('');
      setConvertedValue('');
    }
  }

  return (
    <input
      value={inputTwoValue}
      type='text'
      maxLength='19'
      onFocus={() => setActiveInput('two')}
      onBlur={() => setActiveInput('')}
      onChange={handleOnChange} />
  );
}

export default InputTwo;
