import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Main from './Main';
import Currency from './Currency';
import Temperature from './Temperature';
import Speed from './Speed';
import Volume from './Volume';
import Length from './Length';
import Weight from './Weight';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/currency'>
        <Currency />
      </Route>
      <Route path='/temperature'>
        <Temperature />
      </Route>
      <Route path='/speed'>
        <Speed />
      </Route>
      <Route path='/volume'>
        <Volume />
      </Route>
      <Route path='/length'>
        <Length />
      </Route>
      <Route path='/weight'>
        <Weight />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
