import React from 'react';
import formulasVolume from '../data/formulas-volume';
import units from '../data/units-volume';

import Host from './Host';

function Volume() {
  return (
    <Host
      formulas={formulasVolume}
      units={units}
      selectOneDefault={'galusa'}
      selectTwoDefault={'liter'}
      unitType={'Volume'}
    />
  );
}

export default Volume;