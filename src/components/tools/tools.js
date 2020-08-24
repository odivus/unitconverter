import doConvert from '../../utilties/do-convert';

const convertCommaToDot = (input) => input.replace(',', '.');

export const convertDotToComma = (input) => input.replace('.', ',');

export const removeAllSpaces = (input) => input.replace(/\s+/g, '');

export const groupNumbers = (input) => {
  const pattern = /(\d)(?=(\d{3})+(\D|$))/g;
  return input.replace(pattern, '$1 ');
}

export const convertValue = (
  input, 
  selectOne, 
  selectTwo, 
) => {
  if (input === '0' || input === '0,') return '0';

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