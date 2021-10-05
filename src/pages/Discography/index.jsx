import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlbumsContainer from '../../components/AlbumsContainer';
import fetchDiscography from '../../redux/fetchs/fetchDiscography';
import fetchVideos from '../../redux/fetchs/fetchVideos';
import './style.css';

const Discography = () => {
  const artistID = useSelector((state) => state.artistDetails.idArtist);
  const dispatch = useDispatch();

  const getDiscography = useCallback(async () => {
    await dispatch(fetchDiscography(artistID));
    await dispatch(fetchVideos(artistID));
  }, []);
  useEffect(() => { getDiscography(); }, []);
  return (
    <div className="Discography">
      <h2>Discography</h2>
      <AlbumsContainer />
    </div>
  );
};

export default Discography;
