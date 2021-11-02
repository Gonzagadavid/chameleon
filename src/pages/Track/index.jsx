import { shape, string } from 'prop-types';
import React from 'react';
import LyricContainer from '../../components/LyricContainer';
import VideoContainer from '../../components/VIdeoContainer';
import { TRACKS } from '../../constants/types';
import Favorite from '../../components/Favorite';
import './style.css';

const Track = ({ match: { params: { trackName } } }) => (
  <div className="Track">
    <h2>
      <Favorite type={TRACKS} item={trackName} />
      {trackName}
    </h2>
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
