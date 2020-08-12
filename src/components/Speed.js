import React, { useState, useEffect } from 'react';
import Header from './Header';
// import Input from './ui/Input';
import InputOne from './ui/Input-one';
import InputTwo from './ui/Input-two';
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

  // console.log(inputOne);
  // console.log(inputTwo);
  // console.log(selectOne);
  // console.log(selectTwo);

  return (
    <div className='wrap'>
      <section>
        <Header />
        <InputOne 
          inputOne={inputOne}
          setInputOne={setInputOne}
          setInputTwo={setInputTwo}
          setActiveInput={setActiveInput}
          convertedValue={convertedValue}
          setConvertedValue={setConvertedValue}/>
        <Select 
          selected={selectOne}
          sendValueToParentState={setSelectOne} />
        <InputTwo 
          inputTwo={inputTwo}
          setInputOne={setInputOne}
          setInputTwo={setInputTwo}
          setActiveInput={setActiveInput}
          convertedValue={convertedValue}
          setConvertedValue={setConvertedValue} />
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
