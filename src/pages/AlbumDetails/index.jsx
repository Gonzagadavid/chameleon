import { string, shape } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTrackByAlbum from '../../redux/fetchs/fetchTracksByAlbum';
import AlbumDetailsContainer from '../../components/AlbumDetailsContainer';
import TracksContainer from '../../components/TracksContainer';
import './style.css';
import Loading from '../../components/Loading';

const AlbumDetails = ({ match: { params: { id } } }) => {
  const trackList = useSelector((state) => state.trackList);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const getTracks = useCallback(async () => dispatch(fetchTrackByAlbum(id)), []);
  useEffect(() => getTracks(), []);

  return (
    <div className="AlbumDetails">
      <h2>Album Details</h2>
      <AlbumDetailsContainer id={id} />
      <h2>Tracks</h2>
      {loading ? <Loading /> : <TracksContainer trackList={trackList} />}
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
