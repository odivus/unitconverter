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
      <Route exact strict path='/'>
        <Main />
      </Route>
      <Route exact strict path='/currency'>
        <Currency />
      </Route>
      <Route exact strict path='/temperature'>
        <Temperature />
      </Route>
      <Route exact strict path='/speed'>
        <Speed />
      </Route>
      <Route exact strict path='/volume'>
        <Volume />
      </Route>
      <Route exact strict path='/length'>
        <Length />
      </Route>
      <Route exact strict path='/weight'>
        <Weight />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
