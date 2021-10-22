import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const TracksContainer = ({ trackList, title }) => (
  <div className="TracksContainer">
    <h2>{title}</h2>
    <ul>
      {trackList.map(({ strTrack }) => (
        <Link to={`/artist-details/track/${strTrack}`}><li>{strTrack}</li></Link>
      ))}
    </ul>
  </div>
);

export default TracksContainer;

TracksContainer.propTypes = {
  trackList: arrayOf([shape({
    strTrack: string,
  })]).isRequired,
  title: string.isRequired,
};
