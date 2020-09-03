import createComponent from './tools/create-component';
import formulasTemperature from '../data/formulas-temperature';
import units from '../data/units-temperature';

const args = [
  formulasTemperature,
  units,
  'f',
  'c',
  'Temperature'
];

const Speed = createComponent(...args);

export default Speed;
