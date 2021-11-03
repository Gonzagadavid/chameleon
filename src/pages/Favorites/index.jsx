import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/Loading';
import fetchDiscography from '../../redux/fetchs/fetchDiscography';
import fetchVideos from '../../redux/fetchs/fetchVideos';
import './style.css';

const Favorites = () => {
  const artistID = useSelector((state) => state.artistDetails.idArtist);
  const albums = useSelector((state) => state.albums);
  const videos = useSelector((state) => state.musicVideos);
  const dispatch = useDispatch();

  const getDiscography = useCallback(async () => {
    if (albums.length) return;
    await dispatch(fetchDiscography(artistID));

    if (videos.length) return;
    await dispatch(fetchVideos(artistID));
  }, []);

  useEffect(() => { getDiscography(); }, []);

  if (!albums.length || !videos.length) return <Loading />;

  return (
    <div className="Favorites">
      <h1>Favorites</h1>
    </div>
  );
};

export default Favorites;
