import React from 'react';
import checkInput from '../../utilties/check-input';
import doBackspace from '../../utilties/do-backspace';
import doComma from '../../utilties/do-comma';
import doNumbers from '../../utilties/do-numbers';
import {
  groupNumbers, 
  removeAllSpaces,
} from '../tools/tools';

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
    const reNumbers = /\d/;
  
    if (item === 'clear') resetValues();

    if (reNumbers.test(item)) {
      const args = [
        item,
        inputOne,
        inputTwo,
        activeInput,
        setInputOne,
        setInputTwo,
        groupNumbers,
        removeAllSpaces
      ];

      doNumbers(args);
    }

    if (item === ',') {
      const args = [
        item,
        inputOne,
        inputTwo,
        checkInput,
        activeInput,
        setInputOne,
        setInputTwo,
        removeAllSpaces
      ];

      doComma(args);
    }

    if (item === '--') {
      const args = [
        resetValues, 
        groupNumbers, 
        removeAllSpaces
      ];

      if (activeInput === 'one') 
        doBackspace(inputOne, setInputOne, ...args);
      
      if (activeInput === 'two') 
        doBackspace(inputTwo, setInputTwo, ...args);
    }
  }

  return controlData.map(item => (
    <div
      key={item} 
      onClick={() => onClick(item)}
      className='center'>
        {item}
    </div>
    )
  );
}

export default ControlItem;