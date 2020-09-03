import { removeAllSpaces } from '../components/tools/tools';
import compose from '../components/tools/compose';
import convertTemperature from './convert-temperature';

function convert(value, inUnit, outUnit) {
  if (inUnit === outUnit) return value;
  if (!value || arguments.length !== 3) return '';
  if (typeof value !== 'string' || value === '-') return '';

  const dataValue = compose(
    parseFloat,
    removeAllSpaces
  )(value);

  let result = dataValue * outUnit / inUnit;

  if (document.title.toLowerCase() === 'temperature') {
    return convertTemperature(result, dataValue, outUnit);
  }
  
  return parseFloat( result.toPrecision(4) );
}

export default convert;