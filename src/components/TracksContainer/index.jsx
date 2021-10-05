import { string } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchTrackByAlbum from '../../redux/fetchs/fetchTracksByAlbum';
import './style.css';

const TracksContainer = ({ id }) => {
  const trackList = useSelector((state) => state.trackList);
  const dispatch = useDispatch();
  const getTracks = useCallback(async () => dispatch(fetchTrackByAlbum(id)), []);
  useEffect(() => getTracks(), []);

  return (
    <div className="TracksContainer">
      <h3>Tracks</h3>
      <ul>
        {trackList.map(({ strTrack, idTrack }) => (
          <Link to={`/artist-details/track/${strTrack}/${idTrack}`}><li>{strTrack}</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default TracksContainer;

TracksContainer.propTypes = {
  id: string.isRequired,
};
