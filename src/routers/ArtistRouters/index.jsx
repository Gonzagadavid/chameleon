import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../../components/Nav';
import AlbumDetails from '../../pages/AlbumDetails';
import ArtistDetails from '../../pages/ArtistDetails';
import Biography from '../../pages/Biography';
import Discography from '../../pages/Discography';
import Track from '../../pages/Track';
import VideoList from '../../pages/VideosList';
import {
  ARTIST_DETAILS, BIOGRAPHY, DISCOGRAPHY, ALBUM_DETAILS, TRACK, VIDEOS,
} from '../../constants/routes';
import './style.css';

const ArtistRouters = () => (
  <div className="ArtistRouters">
    <Nav />
    <div className="switch">
      <Switch>
        <Route exact path={ARTIST_DETAILS} component={ArtistDetails} />
        <Route path={BIOGRAPHY} component={Biography} />
        <Route exact path={DISCOGRAPHY} component={Discography} />
        <Route path={ALBUM_DETAILS} component={AlbumDetails} />
        <Route path={TRACK} component={Track} />
        <Route path={VIDEOS} component={VideoList} />
      </Switch>
    </div>
  </div>
);

export default ArtistRouters;
