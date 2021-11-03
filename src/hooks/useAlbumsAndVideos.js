import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchDiscography from '../redux/fetchs/fetchDiscography';
import fetchVideos from '../redux/fetchs/fetchVideos';

const useAlbumsAndVideos = () => {
  const artistID = useSelector((state) => state.artistDetails.idArtist);
  const artistAlbums = useSelector((state) => state.albums);
  const musicVideos = useSelector((state) => state.musicVideos);
  const loading = useSelector((state) => state.loading);
  const [albums, setAlbums] = useState(artistAlbums);
  const [videos, setVideos] = useState(musicVideos);
  const dispatch = useDispatch();

  const getDiscography = useCallback(async () => {
    if (albums.length) return;
    await dispatch(fetchDiscography(artistID));
  }, []);
  const getVideos = useCallback(async () => {
    if (videos.length) return;
    await dispatch(fetchVideos(artistID));
  }, []);

  useEffect(() => {
    setAlbums(artistAlbums);
    setVideos(musicVideos);
  }, [loading]);

  useEffect(() => { getVideos(); }, []);
  useEffect(() => { getDiscography(); }, []);

  return [albums, videos];
};

export default useAlbumsAndVideos;
