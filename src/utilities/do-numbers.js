import compose from '../components/tools/compose';
import {
  groupNumbers,
  removeAllSpaces,
  trimCurrencyValue
} from '../components/tools/tools';

function doNumbers(args) {
  const [
    item,
    inputOne,
    inputTwo,
    activeInput,
    setInputOne,
    setInputTwo,
  ] = args;

  const re = /^[-]{0,}[0]{1,}$/;

  if (inputOne.length > 18 || inputTwo.length > 18) return;

  if (activeInput === 'one' && inputOne.search(re) === -1) {
    compose(
      setInputOne,
      trimCurrencyValue,
      groupNumbers
    )(removeAllSpaces(inputOne) + item);
  }

  if (activeInput === 'two' && inputTwo.search(re) === -1) {
    compose(
      setInputTwo,
      trimCurrencyValue,
      groupNumbers
    )(removeAllSpaces(inputTwo) + item);
  }
}

export default doNumbers;