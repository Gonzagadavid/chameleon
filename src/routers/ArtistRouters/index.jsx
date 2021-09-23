import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../../components/Nav';
import AlbumDetails from '../../pages/AlbumDetails';
import ArtistDetails from '../../pages/ArtistDetails';
import Biography from '../../pages/Biography';
import Discography from '../../pages/Discography';
import './style.css';

const ArtistRouters = () => (
  <div className="ArtistRouters">
    <Nav />
    <Switch>
      <Route exact path="/artist-details" component={ArtistDetails} />
      <Route path="/artist-details/biography" component={Biography} />
      <Route exact path="/artist-details/discography" component={Discography} />
      <Route path="/artist-details/discography/:id" component={AlbumDetails} />
    </Switch>
  </div>
);

export default ArtistRouters;
