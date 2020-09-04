import createComponent from './tools/create-component';
import formulasVolume from '../data/formulas-volume';
import units from '../data/units-volume';

const args = [
  formulasVolume,
  units,
  'galusa',
  'liter',
  'Volume'
];

const Volume = createComponent(...args);

export default Volume;