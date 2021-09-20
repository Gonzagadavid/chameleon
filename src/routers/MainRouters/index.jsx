import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from '../../components/Content';
import Home from '../../pages/Home';

const MainRouters = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/artist-details" component={Content} />
  </Switch>
);

export default MainRouters;
