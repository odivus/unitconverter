import React, {useState, useEffect} from 'react';
import createComponent from './tools/create-component';
import getCurrencyData from '../data/get-currency-data';
import unitsCurrency from '../data/units-currency';

import Header from './Header';
import Error from './Error';

function Currency() {
  const [data, setData] = useState({rates: 1});

  useEffect(() => {
    getCurrencyData()
      .then(data => setData(data))
  }, []);
  
  const args = [
    data.rates,
    unitsCurrency,
    'USD',
    'RUB',
    'Currency'
  ];

  const Component = createComponent(...args);

  return (
    data.error 
      ? <>
          <Header />
          <Error errorText={data.error} /> 
        </>
      : <Component />
  );
}

export default Currency;