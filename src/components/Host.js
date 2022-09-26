import React, { useState, useEffect } from 'react';
import Header from './Header';
import Input from './ui/Input';
import Select from './ui/Select';
import Control from './ui/Control';
import {
  convertValue,
  saveFocusOnInput,
  doSetConvertedValue
} from './tools/tools';

function Component(props) {
  const {
    formulas,
    units,
    selectOneDefault,
    selectTwoDefault,
    unitType
  } = props;

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
    document.title = unitType;

    if (inputOne) {
      const value = convertValue(
        inputOne,
        formulas[selectOne],
        formulas[selectTwo]
      );

      doSetConvertedValue(value, setConvertedValue);
    }

    if (inputTwo) {
      const value = convertValue(
        inputTwo,
        formulas[selectTwo],
        formulas[selectOne]
      );

      doSetConvertedValue(value, setConvertedValue);
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
  }, [
      inputOne,
      inputTwo,
      selectOne,
      selectTwo,
      activeInput,
      convertedValue,
      formulas,
      unitType
    ]
  );

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
          units={units}
          selectName={'selectOne'}
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
          units={units}
          selectName={'selectTwo'}
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

export default Component;