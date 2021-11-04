import React from 'react';
// import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import TracksContainer from '../../components/TracksContainer';
import useAlbumsAndVideos from '../../hooks/useAlbumsAndVideos';
import './style.css';

const VideoList = () => {
  // const loading = useSelector((state) => state.loading);
  const [, musicVideos] = useAlbumsAndVideos();

  return (
    <Loading className="VideoList">
      <h2>Video Music</h2>
      <TracksContainer trackList={musicVideos} />
    </Loading>
  );
};

export default VideoList;
