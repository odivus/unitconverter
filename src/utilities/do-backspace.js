function doBackspace(...args) {
  const [
    input, 
    setInput, 
    resetValues, 
    groupNumbers,
    removeAllSpaces
  ] = args;

  const str = removeAllSpaces(input).slice(0, -1);
  if (str.length === 0) return resetValues();
  setInput(groupNumbers(str));
}

export default doBackspace;