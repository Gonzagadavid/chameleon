import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArtistDetails from '../../pages/ArtistDetails';
import Biography from '../../pages/Biography';
import './style.css';

const ArtistRouters = () => (
  <div className="ArtistRouters">
    <Switch>
      <Route exact path="/artist-details" component={ArtistDetails} />
      <Route path="/artist-details/biography" component={Biography} />
    </Switch>
  </div>
);

export default ArtistRouters;
