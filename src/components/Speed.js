import React from 'react';
import formulasSpeed from '../data/formulas-speed';
import units from '../data/units-speed';

import Host from './Host';

function Speed() {
  return (
    <Host
      formulas={formulasSpeed}
      units={units}
      selectOneDefault={'miph'}
      selectTwoDefault={'kmph'}
      unitType={'Speed'}
    />
  );
}

export default Speed;
