import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  if (!musicVideos.length) return <p>loading...</p>;

  return (
    <div>
      <h2>Videos Music</h2>
      <ul>
        { musicVideos.map(({ strTrack }) => (
          <Link to={`/artist-details/track/${strTrack}`}><li>{strTrack}</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
