import React, {useRef, useEffect} from 'react';
import checkInput from '../../utilties/checkInput';

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

  const inputEl = useRef(null);
  const setFocus = () => inputEl.current.focus();

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
