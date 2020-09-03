import createComponent from './tools/create-component';
import formulasLength from '../data/formulas-length';
import units from '../data/units-length';

const args = [
  formulasLength,
  units,
  'm',
  'ft',
  'Length'
];

const Length = createComponent(...args);

export default Length;
