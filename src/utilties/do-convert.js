import formulas from '../data/formulas';

function doConvert(inputValue, selectOne, selectTwo) {
  if (selectOne === selectTwo) return inputValue;
  if (!inputValue || arguments.length !== 3) return '';
  if (typeof inputValue !== 'string') return '';

  const formulasKey = `${selectOne}-${selectTwo}`,
        formula = formulas[formulasKey];

  return formula(parseFloat(inputValue, 10));
}

export default doConvert;