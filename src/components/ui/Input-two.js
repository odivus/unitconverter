import React from 'react';
import checkInput from '../../utilties/checkInput';

function InputTwo(props) {
  const {
    inputTwo,
    setInputOne,
    setInputTwo,
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
        // console.log('Check Input Value Ok');
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
      onChange={handleOnChange} />
  );
}

export default InputTwo;
