import React from 'react';
import checkInput from '../../utilties/checkInput';

function InputOne(props) {
  const {
    inputOne,
    setInputOne,
    convertedValue,
    setConvertedValue,
  } = props;

  console.log('InputOne Value ' + inputOne);
  console.log('Converted Value ' + convertedValue);

  let inputOneValue = '';
  inputOneValue = !inputOne ? convertedValue : inputOne;

  function handleOnChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (value) {
      if (checkInput(value)) {
        // console.log('Check Input Value Ok');
        setInputOne(value);
        setConvertedValue(convertedValue);
      }
    }

    if (!value) {
      setConvertedValue('');
      setInputOne('');
    }
  }

  // console.log(inputValue);
  // console.log(inputValueConverted);

  return (
    <input
      value={inputOneValue}
      type='text'
      maxLength='19'
      onChange={handleOnChange} />
  );
}

export default InputOne;
