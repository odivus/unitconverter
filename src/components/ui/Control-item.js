import React from 'react';
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
          title = document.title.toLowerCase();
  
    if (item === 'clear') resetValues();

    if (reNumbers.test(item)) {
      const args = [
        item,
        inputOne,
        inputTwo,
        activeInput,
        setInputOne,
        setInputTwo,
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
      ];

      doComma(args);
    }

    if (item === '<--') {
      if (activeInput === 'one') 
        doBackspace(inputOne, setInputOne, resetValues);
      
      if (activeInput === 'two') 
        doBackspace(inputTwo, setInputTwo, resetValues);
    }

    if (item === '+/-' && title === 'temperature') {
      if (activeInput === 'one')
        doPlusMinus(inputOne, setInputOne);

      if (activeInput === 'two')
        doPlusMinus(inputTwo, setInputTwo);
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