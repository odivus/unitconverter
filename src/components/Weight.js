import React from 'react';
import formulasWeight from '../data/formulas-weight';
import units from '../data/units-weight';

import Host from './Host';

function Weight() {
  return (
    <Host
      formulas={formulasWeight}
      units={units}
      selectOneDefault={'pound'}
      selectTwoDefault={'kilogram'}
      unitType={'Weight'}
    />
  );
}

export default Weight;
