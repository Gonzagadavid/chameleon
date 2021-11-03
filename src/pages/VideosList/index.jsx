// import React, { useCallback, useEffect } from 'react';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import TracksContainer from '../../components/TracksContainer';
// import fetchVideos from '../../redux/fetchs/fetchVideos';
import useAlbumsAndVideos from '../../hooks/useAlbumsAndVideos';
import './style.css';

const VideoList = () => {
  const loading = useSelector((state) => state.loading);
  const [, musicVideos] = useAlbumsAndVideos();
  // const artistID = useSelector((state) => state.artistDetails.idArtist);
  // const musicVideos = useSelector((state) => state.musicVideos);
  // const loading = useSelector((state) => state.loading);
  // const dispatch = useDispatch();

  // const getVideos = useCallback(async () => {
  //   if (musicVideos.length) return;
  //   await dispatch(fetchVideos(artistID));
  // }, []);

  // useEffect(() => { getVideos(); }, []);
  console.log(musicVideos);
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
