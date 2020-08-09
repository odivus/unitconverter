import React, { useState, useEffect } from 'react';
import Header from './Header';
import Input from './ui/Input';
import Select from './ui/Select';

import doConvert from '../utilties/do-convert';

function Speed() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const [selectOne, setSelectOne] = useState('miph');
  const [selectTwo, setSelectTwo] = useState('kmph');

  const [convertedValue, setConvertedValue] = useState('');
  // const [inputOneConverted, setInputOneConverted] = useState('');
  // const [inputTwoConverted, setInputTwoConverted] = useState('');

  // useEffect(() => {
  // });
  
  useEffect(() => {
    document.title = 'Speed';
    // console.log('Speed useEffect start');
    
    if (inputOne) {
      const convertedValue = doConvert(inputOne, selectOne, selectTwo);
      setConvertedValue(convertedValue.toString());
    }

    if (inputTwo) {
      const convertedValue = doConvert(inputTwo, selectTwo, selectOne);
      setConvertedValue(convertedValue.toString());
    }

  }, [inputOne, 
      inputTwo, 
      selectOne, 
      selectTwo]);

  console.log(inputOne);
  console.log(inputTwo);
  // console.log(selectOne);
  // console.log(selectTwo);

  console.log(convertedValue);

  return (
    <div className='wrap'>
      <section>
        <Header />
        <Input 
          convertedValue={convertedValue}
          sendValueToParentState={setInputOne} />
        <Select 
          selected={selectOne}
          sendValueToParentState={setSelectOne} />
        <Input 
          convertedValue={convertedValue}
          sendValueToParentState={setInputTwo} />
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
