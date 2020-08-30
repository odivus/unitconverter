function doComma(args) {
  const [
    item,
    inputOne,
    inputTwo,
    checkInput,
    activeInput,
    setInputOne,
    setInputTwo,
    removeAllSpaces
  ] = args;

  if (activeInput === 'one') {
    const str = removeAllSpaces(inputOne + item);
    if (checkInput(str)) setInputOne(str);
  }

  if (activeInput === 'two') {
    const str = removeAllSpaces(inputTwo + item);
    if (checkInput(str)) setInputTwo(str);
  }
}

export default doComma;