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

  const re = /^[-]{0,}[0]{1,}$/;

  if (activeInput === 'one' && inputOne.search(re) === -1) {
    compose(
      setInputOne,
      groupNumbers
    )(removeAllSpaces(inputOne) + item);
  }

  if (activeInput === 'two' && inputTwo.search(re) === -1) {
    compose(
      setInputTwo,
      groupNumbers
    )(removeAllSpaces(inputTwo) + item);
  }
}

export default doNumbers;