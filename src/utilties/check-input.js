function checkInput(value) {
  const regExp = /^[0-9]{1,}([,.]{0,1}[0-9]{0,})?$/;  
  return regExp.test(value);
}

export default checkInput;