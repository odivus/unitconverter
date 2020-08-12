import React from 'react';
import checkInput from '../../utilties/checkInput';

function InputOne(props) {
  const {
    inputOne,
    setInputOne,
    setInputTwo,
    setActiveInput,
    convertedValue,
    setConvertedValue,
  } = props;

  console.log('InputOne Value ' + inputOne);
  console.log('Converted Value ' + convertedValue);

  let inputOneValue = '';
  inputOneValue = !inputOne ? convertedValue : inputOne;

  function onChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (value) {
      if (checkInput(value)) {
        setInputOne(value);
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
      value={inputOneValue}
      type='text'
      maxLength='19'
      onFocus={() => setActiveInput('one')}
      onBlur={() => setActiveInput('')}
      onChange={onChange} />
  );
}

export default InputOne;
