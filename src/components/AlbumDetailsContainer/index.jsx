import { string } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAlbum from '../../redux/fetchs/fetchAlbum';
import './style.css';

const AlbumDetailsContainer = ({ id }) => {
  const album = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const getAlbum = useCallback(async () => dispatch(fetchAlbum(id)), []);
  useEffect(() => { getAlbum(); }, []);
  if (!album) return <p>loading</p>;

  const { strAlbum } = album;

  return (
    <div>
      <h3>{ strAlbum }</h3>
    </div>
  );
};

export default AlbumDetailsContainer;

AlbumDetailsContainer.propTypes = {
  id: string.isRequired,
};
