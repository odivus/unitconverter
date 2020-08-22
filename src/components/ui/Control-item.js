import React from 'react';
import checkInput from '../../utilties/checkInput';
import compose from '../tools/compose';
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
      if (activeInput === 'one' && inputOne.includes(',')) {
        setInputOne(removeAllSpaces(inputOne) + item);
      }

      if (activeInput === 'one' && !inputOne.includes(',')) {
        compose(
          setInputOne,
          groupNumbers
        )(removeAllSpaces(inputOne) + item);
      }

      if (activeInput === 'two' && inputTwo.includes(',')) {
        setInputTwo(removeAllSpaces(inputTwo) + item);
      }

      if (activeInput === 'two' && !inputTwo.includes(',')) {
        compose(
          setInputTwo,
          groupNumbers
        )(removeAllSpaces(inputTwo) + item);
      }
    }

    if (item === ',') {
      if (activeInput === 'one') {
        const str = removeAllSpaces((inputOne) + item);
        if (checkInput(str)) setInputOne(str);
      }

      if (activeInput === 'two') {
        const str = removeAllSpaces(inputTwo + item);
        if (checkInput(str)) setInputTwo(str);
      }
    }

    if (item === '--') {
      if (activeInput === 'one') {
        const str = removeAllSpaces(inputOne).slice(0, -1);
        if (str.length === 0) return resetValues();
        setInputOne(groupNumbers(str));
      }

      if (activeInput === 'two') {
        const str = removeAllSpaces(inputTwo).slice(0, -1);
        if (str.length === 0) return resetValues();
        setInputTwo(groupNumbers(str));
      }
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