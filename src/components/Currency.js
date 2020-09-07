import React, {useState, useEffect} from 'react';
import createComponent from './tools/create-component';
import getCurrencyData from '../data/get-currency-data';
import unitsCurrency from '../data/units-currency';

import Error from './Error';

function Currency() {
  const [data, setData] = useState({});
  const url ='https://api.exchangeratesapi.io/latest?base=USD';

  useEffect(() => {
    getCurrencyData(url)
      .then(data => setData(data.rates))
  }, []);

  console.log(data);

  const args = [
    data,
    unitsCurrency,
    'USD',
    'RUB',
    'Currency'
  ];

  const Component = createComponent(...args);

  return (
    <Component />
  );
}

export default Currency;