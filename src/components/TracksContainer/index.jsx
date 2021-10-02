import { string } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTrackByAlbum from '../../redux/fetchs/fetchTracksByAlbum';
import './style.css';

const TracksContainer = ({ id }) => {
  const trackList = useSelector((state) => state.trackList);
  const dispatch = useDispatch();
  const getTracks = useCallback(async () => dispatch(fetchTrackByAlbum(id)), []);
  useEffect(() => getTracks(), []);

  return (
    <ul>
      {trackList.map(({ strTrack }) => (
        <li>{strTrack}</li>
      ))}
    </ul>
  );
};

export default TracksContainer;

TracksContainer.propTypes = {
  id: string.isRequired,
};
