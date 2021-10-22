import { string, shape } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTrackByAlbum from '../../redux/fetchs/fetchTracksByAlbum';
import AlbumDetailsContainer from '../../components/AlbumDetailsContainer';
import TracksContainer from '../../components/TracksContainer';
import './style.css';

const AlbumDetails = ({ match: { params: { id } } }) => {
  const trackList = useSelector((state) => state.trackList);
  const dispatch = useDispatch();
  const getTracks = useCallback(async () => dispatch(fetchTrackByAlbum(id)), []);
  useEffect(() => getTracks(), []);

  return (
    <div className="AlbumDetails">
      <h2>Album Details</h2>
      <AlbumDetailsContainer id={id} />
      <TracksContainer trackList={trackList} title="Tracks" />
    </div>
  );
};

export default AlbumDetails;

AlbumDetails.propTypes = {
  match: shape({
    param: shape({
      id: string,
    }),
  }).isRequired,
};
