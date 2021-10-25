import { arrayOf, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoYoutube } from 'react-icons/io';
import { MdQueueMusic } from 'react-icons/md';
import './style.css';

const TrackCard = ({ trackName, videosTrack }) => {
  const checkVideo = videosTrack.includes(trackName);

  return (
    <div className="TrackCard">
      <Link to={`/artist-details/track/${trackName}`}>
        {trackName}
        <div className="icon">
          {checkVideo && (
            <span>
              <IoLogoYoutube />
            </span>
          )}
          <span><MdQueueMusic /></span>
        </div>
      </Link>
    </div>
  );
};
export default TrackCard;

TrackCard.propTypes = {
  trackName: string.isRequired,
  videosTrack: arrayOf(string).isRequired,
};
