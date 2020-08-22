import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Control from '../ui/Control';
import {
  convertValue,
  saveFocusOnInput,
} from './tools';

function createComponent(selectOneDefault, selectTwoDefault) {
  const errorMessage = 'Function createComponent wait two string arguments';

  if (arguments.length < 2) {
    throw Error(errorMessage);
  }
  
  if (typeof selectOneDefault !== 'string' || 
      typeof selectTwoDefault !== 'string') {
        throw Error(errorMessage);
  }

  return function Component() {
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');

    const [activeInput, setActiveInput] = useState('');

    const [selectOne, setSelectOne] = useState(selectOneDefault);
    const [selectTwo, setSelectTwo] = useState(selectTwoDefault);

    const [convertedValue, setConvertedValue] = useState('');

    const setActiveInputOne = () => setActiveInput('one'),
          setActiveInputTwo = () => setActiveInput('two');

    const inputOneValue = !inputOne ? convertedValue : inputOne,
          inputTwoValue = !inputTwo ? convertedValue : inputTwo;

    function resetValues() {
      setInputOne('');
      setInputTwo('');
      setConvertedValue('');
    }

    useEffect(() => {
      document.title = 'Speed';
      console.log('Speed useEffect Input One Value: ' + inputOne);
      console.log('Speed useEffect Input Two Value: ' + inputTwo);
      console.log('Speed useEffect Converted Value: ' + convertedValue);

      if (inputOne) {
        setConvertedValue(
          convertValue(inputOne, selectOne, selectTwo)
        );
      }

      if (inputTwo) {
        setConvertedValue(
          convertValue(inputTwo, selectTwo, selectOne)
        );
      }

      if (inputOne && inputTwo) {
        if (activeInput === 'one') {
          setInputOne(prevState => {
            if (prevState) {
              setInputTwo('');
              return prevState;
            }
          });
        }

        if (activeInput === 'two') {
          setInputTwo(prevState => {
            if (prevState) {
              setInputOne('');
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

    return (
      <div className='wrap'>
        <section>
          <Header />
          <Input
            inputOneValue={inputOneValue}
            inputName={'inputOne'}
            activeInput={activeInput}
            inputValue={inputOneValue}
            setInput={setInputOne}
            setActiveInput={setActiveInputOne}
            convertedValue={convertedValue}
            setConvertedValue={setConvertedValue}
            resetValues={resetValues} />
          <Select
            selected={selectOne}
            sendValueToParentState={setSelectOne} />
          <Input
            inputTwoValue={inputTwoValue}
            inputName={'inputTwo'}
            activeInput={activeInput}
            inputValue={inputTwoValue}
            setInput={setInputTwo}
            setActiveInput={setActiveInputTwo}
            convertedValue={convertedValue}
            setConvertedValue={setConvertedValue}
            resetValues={resetValues} />
          <Select
            selected={selectTwo}
            sendValueToParentState={setSelectTwo} />
        </section>

        <section
          className='control'
          onMouseDown={saveFocusOnInput}>
          <Control
            inputOne={inputOne}
            inputTwo={inputTwo}
            activeInput={activeInput}
            setInputOne={setInputOne}
            setInputTwo={setInputTwo}
            setConvertedValue={setConvertedValue}
            resetValues={resetValues} />
        </section>
      </div>
    );
  }
}

export default createComponent;