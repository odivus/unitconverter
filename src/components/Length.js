import React from 'react';
import formulasLength from '../data/formulas-length';
import units from '../data/units-length';

import Host from './Host';

function Length() {
  return (
    <Host
      formulas={formulasLength}
      units={units}
      selectOneDefault={'m'}
      selectTwoDefault={'ft'}
      unitType={'Length'}
    />
  );
}

export default Length;
