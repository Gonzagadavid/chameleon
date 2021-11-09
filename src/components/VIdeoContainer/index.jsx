import { string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import toEmbed from '../../functions/embedVideo';
import CheckComponent from '../CheckComponent';
import './style.css';

const VideoContainer = ({ trackName }) => {
  const musicVideos = useSelector((state) => state.musicVideos);
  const [music] = musicVideos.filter(({ strTrack }) => trackName === strTrack);
  const embedVideo = toEmbed(music);

  return (
    <CheckComponent condition={music}>
      <div className="Video">
        <iframe src={embedVideo} title={`video of music ${trackName}`} data-testid="video-music" />
      </div>
    </CheckComponent>
  );
};

export default VideoContainer;

VideoContainer.propTypes = {
  trackName: string.isRequired,
};
