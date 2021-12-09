import { string } from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import toEmbed from '../../functions/embedVideo';
import CheckComponent from '../CheckComponent';
import './style.css';

const VideoContainer = ({ trackName }) => {
  const [visible, setVisible] = useState(true);
  const [sticky, setStiky] = useState(true);
  const musicVideos = useSelector((state) => state.musicVideos);
  const [music] = musicVideos.filter(({ strTrack }) => trackName === strTrack);
  const embedVideo = toEmbed(music);

  return (
    <CheckComponent condition={music && visible}>
      <div className={`Video ${sticky ? 'sticky' : ''}`} data-testid="video-container">
        <iframe className="Video" src={`${embedVideo}?modestbranding=1&control=1`} title={`video of music ${trackName}`} data-testid="video-music" />
        <div className="btns">
          <button type="button" onClick={() => setVisible(false)} data-testid="close-video">
            <AiOutlineClose />
          </button>
          <button type="button" onClick={() => setStiky(!sticky)} data-testid="sticky-video">
            {sticky ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
      </div>
    </CheckComponent>
  );
};

export default VideoContainer;

VideoContainer.propTypes = {
  trackName: string.isRequired,
};
