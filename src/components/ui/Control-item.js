import React from 'react';
import checkInput from '../../utilties/checkInput';

function ControlItem({ controlData, otherProps }) {
  const {
    inputOne,
    inputTwo,
    activeInput,
    setInputOne,
    setInputTwo,
    resetValues,
  } = otherProps;

  console.log(inputOne.length);

  function onClick(item) {
    const reNumbers = /\d/;

    if (reNumbers.test(item)) {
      if (activeInput === 'one') setInputOne(inputOne + item);
      if (activeInput === 'two') setInputTwo(inputTwo + item);
    }

    if (item === ',') {
      if (activeInput === 'one') {
        const str = inputOne + item;
        if (checkInput(str)) setInputOne(str);
      }

      if (activeInput === 'two') {
        const str = inputTwo + item;
        if (checkInput(str)) setInputTwo(str);
      }
    }

    if (item === '--') {
      if (activeInput === 'one') {
        const str = inputOne.slice(0, -1);
        if (str.length === 0) return resetValues();
        setInputOne(str);
      }
      if (activeInput === 'two') {
        const str = inputTwo.slice(0, -1);
        if (str.length === 0) return resetValues();
        setInputTwo(str);
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