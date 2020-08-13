import React, { useState, useEffect } from 'react';
import Header from './Header';
import Input from './ui/Input';
import Select from './ui/Select';

import doConvert from '../utilties/do-convert';

function Speed() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const [activeInput, setActiveInput] = useState('');

  const [selectOne, setSelectOne] = useState('miph');
  const [selectTwo, setSelectTwo] = useState('kmph');

  const [convertedValue, setConvertedValue] = useState('');
  
  useEffect(() => {
    document.title = 'Speed';
    console.log('Speed useEffect Input One Value: ' + inputOne);
    console.log('Speed useEffect Input Two Value: ' + inputTwo);
    console.log('Speed useEffect Converted Value: ' + convertedValue);
    
    if (inputOne) {
      const convertedValue = doConvert(inputOne, selectOne, selectTwo);
      setConvertedValue(convertedValue.toString());
    }

    if (inputTwo) {
      const convertedValue = doConvert(inputTwo, selectTwo, selectOne);
      setConvertedValue(convertedValue.toString());
    }

    if (inputOne && inputTwo) {
      if (activeInput === 'two') {
        setInputTwo(prevState => {
          if (prevState) {
            setInputOne('');
            return prevState;
          }
        });
      }
      
      if (activeInput === 'one') {
        setInputOne(prevState => {
          if (prevState) {
            setInputTwo('');
            return prevState;
          }
        });
      }
    }

  }, [inputOne, 
      inputTwo, 
      selectOne, 
      selectTwo,
      activeInput,
      convertedValue]);

  console.log(activeInput);

  let inputOneValue = '',
      inputTwoValue = '';

  inputOneValue = !inputOne ? convertedValue : inputOne;
  inputTwoValue = !inputTwo ? convertedValue : inputTwo;

  const setActiveInputOne = () => setActiveInput('one'),
        setActiveInputTwo = () => setActiveInput('two');

  function resetValues() {
    setInputOne('');
    setInputTwo('');
    setConvertedValue('');
  }

  return (
    <div className='wrap'>
      <section>
        <Header />
        <Input 
          inputValue={inputOneValue}
          inputOne={inputOne}
          setInput={setInputOne}
          setActiveInput={setActiveInputOne}
          convertedValue={convertedValue}
          setConvertedValue={setConvertedValue}
          resetValues={resetValues} />
        <Select 
          selected={selectOne}
          sendValueToParentState={setSelectOne} />
        <Input 
          inputValue={inputTwoValue}
          inputTwo={inputTwo}
          setInput={setInputTwo}
          setActiveInput={setActiveInputTwo}
          convertedValue={convertedValue}
          setConvertedValue={setConvertedValue}
          resetValues={resetValues} />
        <Select 
          selected={selectTwo}
          sendValueToParentState={setSelectTwo} />
      </section>

      <section className='contol'>

      </section>
    </div>
  );
}

export default Speed;
