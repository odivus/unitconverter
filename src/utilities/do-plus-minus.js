function doPlusMinus(input, setInput) {
  if (input.includes('-')) {
    setInput(input.replace('-', ''))
  } else {
    setInput('-' + input);
  }
}

export default doPlusMinus;