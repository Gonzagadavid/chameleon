import { string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const TrackCard = ({ trackName }) => (
  <div>
    <Link to={`/artist-details/track/${trackName}`}>{trackName}</Link>
  </div>
);

export default TrackCard;

TrackCard.propTypes = {
  trackName: string.isRequired,
};
