import { string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const VideoContainer = ({ trackName }) => {
  const musicVideos = useSelector((state) => state.musicVideos);
  const music = musicVideos.filter(({ strTrack }) => trackName === strTrack)[0];
  if (!music) return '';
  const embedVideo = music.strMusicVid.replace(/watch\?v=/g, 'embed/');

  return (
    <div className="Video">
      <iframe src={embedVideo} title={`video of music ${trackName}`} />
    </div>
  );
};

export default VideoContainer;

VideoContainer.propTypes = {
  trackName: string.isRequired,
};
