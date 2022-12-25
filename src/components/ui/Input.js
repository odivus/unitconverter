import React, {useRef, useEffect} from 'react';
import checkInput from '../../utilities/check-input';
import compose from '../tools/compose';
import {
  convertDotToComma, 
  groupNumbers,
  removeAllSpaces,
  trimCurrencyValue
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

  function onChange(e) {
    const { value } = e.target;
    const re = /^[-]{0,}[0][0-9]{1,}$/;
  
    e.preventDefault();

    if (!value) resetValues();

    if (value && value.search(re) === -1) {
      const formattedValue = removeAllSpaces(value);

      if (!checkInput(formattedValue)) return;

      compose(
        setInput,
        trimCurrencyValue,
        convertDotToComma,
        groupNumbers
      )(formattedValue);
      
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
