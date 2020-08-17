import doConvert from '../../utilties/do-convert';

const convertCommaToDot = (input) => input.replace(',', '.');

export const convertValue = (
  input, 
  selectOne, 
  selectTwo, 
) => {
  const convertedValue = doConvert(
    convertCommaToDot(input),
    selectOne,
    selectTwo
  );

  return convertedValue.toString().replace('.', ',');
}

export const saveFocusOnInput = (e) => {
  const inputEl = document.getElementsByTagName('input');

  for (let i = 0; i < inputEl.length; i++) {
    if (document.activeElement === inputEl[i]) {
      e.preventDefault();
    }
  }
}