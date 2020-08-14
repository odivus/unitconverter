import React from 'react';

function ControlItem({ controlData, otherProps }) {
  const {
    inputOne,
    inputTwo,
    activeInput,
    setInputOne,
    setInputTwo,
  } = otherProps;

  function onClick(item) {
    const reNumbers = /\d/;
          // reComma = /\d{1,}[,]{1}/;

    if (reNumbers.test(item)) {
      if (activeInput === 'one') setInputOne(inputOne + item);
      if (activeInput === 'two') setInputTwo(inputTwo + item);
    }

    // if (reComma.test(item)) {
    //   console.log('Comma ok');
    // }
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