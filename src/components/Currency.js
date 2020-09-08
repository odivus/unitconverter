import React, {useState, useEffect} from 'react';
import createComponent from './tools/create-component';
import getCurrencyData from '../data/get-currency-data';
import unitsCurrency from '../data/units-currency';
import {apiExchangeUrl as url} from '../data/api-exchange-url';

import Header from './Header';
import Error from './Error';

function Currency() {
  const [data, setData] = useState({});
  const args = [
    data.rates,
    unitsCurrency,
    'USD',
    'RUB',
    'Currency'
  ];
  const Component = createComponent(...args);

  useEffect(() => {
    getCurrencyData(url)
      .then(data => setData(data))
  }, []);

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