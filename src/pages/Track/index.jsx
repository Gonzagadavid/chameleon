import { shape, string } from 'prop-types';
import React from 'react';
import LyricContainer from '../../components/LyricContainer';
import VideoContainer from '../../components/VIdeoContainer';
import './style.css';

const Track = ({ match: { params: { trackName } } }) => (
  <div>
    <h3>{trackName}</h3>
    <VideoContainer trackName={trackName} />
    <LyricContainer trackName={trackName} />
  </div>
);

export default Track;

Track.propTypes = {
  match: shape({
    param: shape({
      trackName: string,
    }),
  }).isRequired,
};
