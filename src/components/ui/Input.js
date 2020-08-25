import React, {useRef, useEffect} from 'react';
import checkInput from '../../utilties/check-input';
import compose from '../tools/compose';
import {
  convertDotToComma, 
  groupNumbers,
  removeAllSpaces,
} from '../tools/tools';

function Input(props) {
  const {
    inputName,
    activeInput,
    inputValue,
    setInput,
    setActiveInput,
    convertedValue,
    setConvertedValue,
    resetValues,
  } = props;

  const inputEl = useRef(null),
        setFocus = () => inputEl.current.focus();

  useEffect(() => {
    if (!activeInput && inputName === 'inputOne') setFocus();
    
    if ((activeInput === 'one') && (inputName === 'inputOne')) {
      setFocus();
    }

    if ((activeInput === 'two') && (inputName === 'inputTwo')) {
      setFocus();
    }
  });

  console.log('Input Value ' + inputValue);
  console.log('Converted Value ' + convertedValue);

  function onChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (!value) resetValues();

    if (value && value.search(/^[0][0-9]{1,}$/) === -1) {
      const formattedValue = removeAllSpaces(value);

      console.log(formattedValue);

      if (!checkInput(formattedValue)) return;

      if (formattedValue.includes(',')) {
        compose(
          setInput,
          convertDotToComma,
        )(formattedValue);
      }

      if (!formattedValue.includes(',')) {
        compose(
          setInput,
          convertDotToComma,
          groupNumbers
        )(formattedValue);
      }
      
      setConvertedValue(convertedValue);
    }
  }

  return (
    <input
      ref={inputEl}
      value={inputValue}
      type='text'
      maxLength='19'
      onFocus={setActiveInput}
      onChange={onChange} />
  );
}

export default Input;
