import React from 'react';
import Button from '../ui/Button/Button';

import checkInput from '../../utilities/check-input';
import doBackspace from '../../utilities/do-backspace';
import doPlusMinus from '../../utilities/do-plus-minus';
import doComma from '../../utilities/do-comma';
import doNumbers from '../../utilities/do-numbers';

function ControlItem({ controlData, otherProps }) {
  const {
    inputOne,
    inputTwo,
    activeInput,
    setInputOne,
    setInputTwo,
    resetValues,
  } = otherProps;

  function onClick(item) {
    const reNumbers = /\d/,
          title = document.title.toLowerCase(),
          [key] = Object.keys(item);

    if (key === 'clear') resetValues();

    if (reNumbers.test(item[key])) {
      const args = [
        item[key],
        inputOne,
        inputTwo,
        activeInput,
        setInputOne,
        setInputTwo,
      ];

      doNumbers(args);
    }

    if (key === 'comma') {
      const args = [
        item[key],
        inputOne,
        inputTwo,
        checkInput,
        activeInput,
        setInputOne,
        setInputTwo,
      ];

      doComma(args);
    }

    if (key === 'backspace') {
      if (activeInput === 'one') 
        doBackspace(inputOne, setInputOne, resetValues);
      
      if (activeInput === 'two') 
        doBackspace(inputTwo, setInputTwo, resetValues);
    }

    if (key === 'plusMinus' && title === 'temperature') {
      if (activeInput === 'one')
        doPlusMinus(inputOne, setInputOne);

      if (activeInput === 'two')
        doPlusMinus(inputTwo, setInputTwo);
    }
  }

  return controlData.map((item, index) => {
    const [ keyItem ] = Object.keys(item);

    return (
      <div
        key={index} 
        onClick={() => onClick(item)}
      >
        <Button>
          {item[keyItem]}
        </Button>
      </div>
    )}
  );
}

export default ControlItem;