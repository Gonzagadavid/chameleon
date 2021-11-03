import { string, shape } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTrackByAlbum from '../../redux/fetchs/fetchTracksByAlbum';
import AlbumDetailsContainer from '../../components/AlbumDetailsContainer';
import TracksContainer from '../../components/TracksContainer';
import fetchAlbum from '../../redux/fetchs/fetchAlbum';
import './style.css';
import Loading from '../../components/Loading';
import Delayed from '../../components/Delayed';

const AlbumDetails = ({ match: { params: { id } } }) => {
  const trackList = useSelector((state) => state.trackList);
  const album = useSelector((state) => state.album);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const getTracks = useCallback(async () => {
    dispatch(fetchAlbum(id));
    dispatch(fetchTrackByAlbum(id));
  }, []);

  useEffect(() => {
    getTracks();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="AlbumDetails">
      <Delayed>
        <h2>Album Details</h2>
        <AlbumDetailsContainer album={album} />
        <h3>Tracks</h3>
        <TracksContainer trackList={trackList} />
      </Delayed>
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
