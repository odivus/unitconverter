import {
  groupNumbers,
  removeAllSpaces,
} from '../components/tools/tools';

function doComma(args) {
  const [
    item,
    inputOne,
    inputTwo,
    checkInput,
    activeInput,
    setInputOne,
    setInputTwo,
  ] = args;

  if (activeInput === 'one') {
    const str = removeAllSpaces(inputOne + item);
    if (checkInput(str)) setInputOne(groupNumbers(str));
  }

  if (activeInput === 'two') {
    const str = removeAllSpaces(inputTwo + item);
    if (checkInput(str)) setInputTwo(groupNumbers(str));
  }
}

export default doComma;