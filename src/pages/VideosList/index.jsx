import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TracksContainer from '../../components/TracksContainer';
import fetchVideos from '../../redux/fetchs/fetchVideos';
import './style.css';

const VideoList = () => {
  const artistID = useSelector((state) => state.artistDetails.idArtist);
  const musicVideos = useSelector((state) => state.musicVideos);
  const dispatch = useDispatch();

  const getVideos = useCallback(async () => {
    await dispatch(fetchVideos(artistID));
  }, []);
  useEffect(() => { getVideos(); }, []);

  console.log(musicVideos);
  if (!musicVideos.length) return <p>loading...</p>;

  return (
    <div className="VideoList">
      <TracksContainer trackList={musicVideos} title="Video Music" />
    </div>
  );
};

export default VideoList;
