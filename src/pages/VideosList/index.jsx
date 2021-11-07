import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import TracksContainer from '../../components/TracksContainer';
import useFetchReturnState from '../../hooks/useFetchReturnState';
import fetchVideos from '../../redux/fetchs/fetchVideos';
import './style.css';

const VideoList = () => {
  const idArtist = useSelector((state) => state.artistDetails.idArtist);
  const [musicVideos] = useFetchReturnState(fetchVideos, idArtist, 'musicVideos');

  return (
    <Loading className="VideoList">
      <h2>Video Music</h2>
      <TracksContainer trackList={musicVideos} />
    </Loading>
  );
};

export default VideoList;
