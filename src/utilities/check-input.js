function checkInput(value) {
  let regExp;
  const unitType = document.title.toLowerCase();
  
  if (unitType === 'temperature') {
    regExp = /^[-]{0,1}[0-9]{1,}([,.]{0,1}[0-9]{0,})?$/;
  } else {
    regExp = /^[0-9]{1,}([,.]{0,1}[0-9]{0,})?$/;  
  }

  return regExp.test(value);
}

export default checkInput;