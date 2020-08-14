import React from 'react';
import ControlItem from '../ui/Control-item';
import controlData from '../../data/control-data';

function Control({...otherProps}) {
  return (
    <ControlItem 
      otherProps={otherProps}
      controlData={controlData} 
    />
  );
}

export default Control;
