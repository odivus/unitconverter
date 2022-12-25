import React, {useState, useEffect} from 'react';
import getCurrencyData from '../data/get-currency-data';
import unitsCurrency from '../data/units-currency';

import Host from './Host';
import Header from './Header';
import Error from './Error';

function Currency() {
  const [data, setData] = useState({rates: 1});

  useEffect(() => {
    getCurrencyData()
      .then(data => setData(data))
  }, []);

  return (
    data.error 
      ? <>
          <Header />
          <Error errorText={data.error} /> 
        </>
      : <Host 
          formulas={data.rates} 
          units={unitsCurrency}
          selectOneDefault={'USD'}
          selectTwoDefault={'RUB'}
          unitType={'Currency'}
        />
  );
}

export default Currency;