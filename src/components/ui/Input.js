import React, {useRef, useEffect} from 'react';
import checkInput from '../../utilties/checkInput';

function Input(props) {
  const {
    inputOneValue,
    inputTwoValue,
    inputName,
    activeInput,
    inputValue,
    setInput,
    setActiveInput,
    convertedValue,
    setConvertedValue,
    resetValues,
  } = props;

  const inputEl = useRef(null);

  useEffect(() => {
    if (!activeInput && inputName === 'inputOne') inputEl.current.focus();
    if ((inputOneValue && activeInput === 'one') || 
        (inputTwoValue && activeInput === 'two')) {
          inputEl.current.focus();
    }
  });

  console.log('Input Value ' + inputValue);
  console.log('Converted Value ' + convertedValue);

  function onChange(e) {
    const { value } = e.target;
    e.preventDefault();

    if (!value) resetValues();

    if (value) {
      if (checkInput(value)) {
        setInput(value.replace('.', ','));
        setConvertedValue(convertedValue);
      }
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
