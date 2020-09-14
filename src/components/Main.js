import React from 'react';
import { useHistory } from "react-router-dom";

export const mainItems = [
  'Currency',
  'Temperature',
  'Speed',
  'Volume',
  'Length',
  'Weight'
];

export function Items({ mainItems, goToRoute }) {
  return mainItems.map((item, index) => {
    return (
      <div
        key={index}
        className='center'
        onClick={() => goToRoute(`/${item.toLowerCase()}`)}>
        {item}
      </div>
    );
  });
}

function Main() {
  let history = useHistory();

  function goToRoute(route) {
    history.push(route);
  }

  return (
    <>
      <h2 className="h2 center">Unit Converter</h2>
      <div className="main">
        <Items
          mainItems={mainItems}
          goToRoute={goToRoute} />
      </div>
    </>
  );
}

export default Main;