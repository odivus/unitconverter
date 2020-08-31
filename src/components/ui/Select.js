import React, {useState} from 'react';
import units from '../../data/units-speed';

const createOptions = (units) => (
  Object.keys(units)
    .map(key => <option key={key} value={key}>{units[key]}</option>)
);

function Select({ selected, sendValueToParentState }) {
  const [selectValue, setSelectValue] = useState(selected);

  function handleSelect(e) {
    const { value } = e.target;
    setSelectValue(value);
    sendValueToParentState(value);
  }

  return (
    <select value={selectValue} onChange={handleSelect}>
      {createOptions(units)}
    </select>
  );
}

export default Select;
