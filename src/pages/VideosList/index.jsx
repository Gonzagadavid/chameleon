import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import TracksContainer from '../../components/TracksContainer';
import fetchVideos from '../../redux/fetchs/fetchVideos';
import './style.css';

const VideoList = () => {
  const artistID = useSelector((state) => state.artistDetails.idArtist);
  const musicVideos = useSelector((state) => state.musicVideos);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const getVideos = useCallback(async () => {
    if (musicVideos.length) return;
    await dispatch(fetchVideos(artistID));
  }, []);

  useEffect(() => { getVideos(); }, []);

  return (
    <div className="VideoList">
      <h2>Video Music</h2>
      {loading
        ? <Loading />
        : <TracksContainer trackList={musicVideos} />}
    </div>
  );
};

export default VideoList;
