import compose from '../components/tools/compose';

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

export default doNumbers;