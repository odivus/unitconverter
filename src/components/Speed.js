import createComponent from './tools/create-component';
import formulasSpeed from '../data/formulas-speed';
import units from '../data/units-speed';

const args = [
  formulasSpeed,
  units,
  'miph',
  'kmph',
  'Speed'
];

const Speed = createComponent(...args);

export default Speed;
