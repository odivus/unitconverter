import React from 'react';
import formulasTemperature from '../data/formulas-temperature';
import units from '../data/units-temperature';

import Host from './Host';

function Temperature() {
  return (
    <Host
      formulas={formulasTemperature}
      units={units}
      selectOneDefault={'f'}
      selectTwoDefault={'c'}
      unitType={'Temperature'}
    />
  );
}

export default Temperature;