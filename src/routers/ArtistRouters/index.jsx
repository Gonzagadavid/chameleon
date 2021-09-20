import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../../components/Nav';
import ArtistDetails from '../../pages/ArtistDetails';
import Biography from '../../pages/Biography';
import './style.css';

const ArtistRouters = () => (
  <div className="ArtistRouters">
    <Nav />
    <Switch>
      <Route exact path="/artist-details" component={ArtistDetails} />
      <Route path="/artist-details/biography" component={Biography} />
    </Switch>
  </div>
);

export default ArtistRouters;
