import convert from '../../utilities/convert';

const convertCommaToDot = (input) => input.replace(',', '.');

export const convertDotToComma = (input) => input.replace('.', ',');

export const removeAllSpaces = (input) => input.replace(/\s+/g, '');

export const groupNumbers = (input) => {
  const re = /(\d)(?=(\d{3})+(\D|$))/g;
  const reComma = /^\d{1,},/;

  if (input.includes('.')) input = input.replace('.', ',');

  if (input.includes(',')) {
    if (input.search(reComma) !== -1) {
      const inputSplit = input.split(',');
      const inputBeforeComma = inputSplit[0].replace(re, '$1 ');

      return inputBeforeComma + ',' + inputSplit[1];
    }
  }

  return input.replace(re, '$1 ');
}

export const convertValue = (
  input, 
  selectOne, 
  selectTwo, 
) => {
  const re = /^[0]{1,}[,0]{1,}$/;

  if (document.title.toLowerCase() !== 'temperature') {
    if (input === '0'|| input.search(re) !== -1) return '0';
  }

  const convertedValue = convert(
    convertCommaToDot(input),
    selectOne,
    selectTwo
  );

  return convertedValue.toString().replace('.', ',');
}

export const doSetConvertedValue = (value, setConvertedValue) => {
  setConvertedValue(value);
}

export const saveFocusOnInput = (e) => {
  const inputEl = document.getElementsByTagName('input');

  for (let i = 0; i < inputEl.length; i++) {
    if (document.activeElement === inputEl[i]) {
      e.preventDefault();
    }
  }
}