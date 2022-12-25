import {
  groupNumbers,
  removeAllSpaces,
} from '../components/tools/tools';

function doBackspace(input, setInput, resetValues) {
  const str = removeAllSpaces(input).slice(0, -1);
  
  if (str.length === 0) return resetValues();
  setInput(groupNumbers(str));
}

export default doBackspace;