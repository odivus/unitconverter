import compose from '../components/tools/compose';

function findNumAfterZero(item, input) {
  const re = /[0][0-9]{1,}/;

  if ((input + item).search(re) !== -1) {
   return true;
  } else {
    return false;
  }
}

function doNumbers(args) {
  const [
    item,
    inputOne,
    inputTwo,
    activeInput,
    setInputOne,
    setInputTwo,
    groupNumbers,
    removeAllSpaces
  ] = args;

  if (activeInput === 'one' && inputOne.includes(',')) {
    setInputOne(removeAllSpaces(inputOne) + item);
  }

  if (activeInput === 'one' && !inputOne.includes(',')) {
    if (findNumAfterZero(item, inputOne)) {
      setInputOne(inputOne);
    } else {
      compose(
        setInputOne,
        groupNumbers
      )(removeAllSpaces(inputOne) + item);
    }
  }

  if (activeInput === 'two' && inputTwo.includes(',')) {
    setInputTwo(removeAllSpaces(inputTwo) + item);
  }

  if (activeInput === 'two' && !inputTwo.includes(',')) {
    if (findNumAfterZero(item, inputTwo)) {
      setInputOne(inputTwo);
    } else {
      compose(
        setInputTwo,
        groupNumbers
      )(removeAllSpaces(inputTwo) + item);
    }
  }
}

export default doNumbers;