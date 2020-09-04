import createComponent from './tools/create-component';
import formulasWeight from '../data/formulas-weight';
import units from '../data/units-weight';

const args = [
  formulasWeight,
  units,
  'pound',
  'kilogram',
  'Weight'
];

const Weight = createComponent(...args);

export default Weight;
