import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchVideos from '../redux/fetchs/fetchVideos';

const useVideos = () => {
  const artistID = useSelector((state) => state.artistDetails.idArtist);
  const musicVideos = useSelector((state) => state.musicVideos);
  const loading = useSelector((state) => state.loading);
  const [videos, setVideos] = useState(musicVideos);
  const dispatch = useDispatch();

  const getVideos = useCallback(async () => {
    if (videos.length) return;
    await dispatch(fetchVideos(artistID));
  }, []);

  useEffect(() => {
    setVideos(musicVideos);
  }, [loading]);

  useEffect(() => { getVideos(); }, []);

  return [videos];
};

export default useVideos;
