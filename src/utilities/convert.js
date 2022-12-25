import compose from '../components/tools/compose';
import convertTemperature from './convert-temperature';
import { 
  groupNumbers, 
  removeAllSpaces, 
} from '../components/tools/tools';

function convert(value, inUnit, outUnit) {
  if (inUnit === outUnit) return value;
  if (!value || arguments.length !== 3) return '';
  if (typeof value !== 'string' || value === '-') return '';

  const dataValue = compose(
    parseFloat,
    removeAllSpaces
  )(value);

  const title = document.title.toLowerCase();
  let result = dataValue * outUnit / inUnit;

  if (title === 'temperature') {
    const formattedResult = convertTemperature(result, dataValue, outUnit);
    return groupNumbers( formattedResult.toString() );
  }

  if (title === 'currency') {
    const formattedResult = parseFloat( result.toFixed(2) );
    return groupNumbers( formattedResult.toString() );
  }

  const formattedResult = parseFloat( result.toPrecision(4) );
  
  return groupNumbers( formattedResult.toString() );
}

export default convert;