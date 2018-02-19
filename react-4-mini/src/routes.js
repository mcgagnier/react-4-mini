import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Route1 from './route1';
import Route2 from './route2';
import Route3 from './route3';

export default (
<Switch>
    <Route exact path="/" component={ Route1 } />
    <Route path="/2" component={ Route2 } />
    <Route path="/3" component={ Route3 } />
</Switch>
)