import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlbumsContainer from '../../components/AlbumsContainer';
import Loading from '../../components/Loading';
import fetchDiscography from '../../redux/fetchs/fetchDiscography';
import fetchVideos from '../../redux/fetchs/fetchVideos';
import './style.css';

const Discography = () => {
  const artistID = useSelector((state) => state.artistDetails.idArtist);
  const albums = useSelector((state) => state.albums);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const getDiscography = useCallback(async () => {
    if (albums.length) return;
    await dispatch(fetchDiscography(artistID));
    await dispatch(fetchVideos(artistID));
  }, []);

  useEffect(() => { getDiscography(); }, []);

  // if (loading) return <Loading />;

  return (
    <div className="Discography">
      <h2>Discography</h2>
      { loading ? <Loading /> : <AlbumsContainer albums={albums} /> }
    </div>
  );
};

export default Discography;
