import formulas from '../data/formulas-speed';
import {removeAllSpaces} from '../components/tools/tools';
import compose from '../components/tools/compose';

function doConvert(inputValue, selectOne, selectTwo) {
  if (selectOne === selectTwo) return inputValue;
  if (!inputValue || arguments.length !== 3) return '';
  if (typeof inputValue !== 'string') return '';

  const formulasKey = `${selectOne}-${selectTwo}`,
        doFormula = formulas[formulasKey];

  return compose(
    doFormula,
    parseFloat,
    removeAllSpaces
  )(inputValue);
}

export default doConvert;