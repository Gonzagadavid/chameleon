import { string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckComponent from '../CheckComponent';
import './style.css';

const VideoContainer = ({ trackName }) => {
  const musicVideos = useSelector((state) => state.musicVideos);
  const music = musicVideos.filter(({ strTrack }) => trackName === strTrack)[0];
  const embedVideo = music && music.strMusicVid.replace(/watch\?v=/g, 'embed/');

  return (
    <CheckComponent condition={music}>
      <div className="Video">
        <iframe src={embedVideo} title={`video of music ${trackName}`} />
      </div>
    </CheckComponent>
  );
};

export default VideoContainer;

VideoContainer.propTypes = {
  trackName: string.isRequired,
};
