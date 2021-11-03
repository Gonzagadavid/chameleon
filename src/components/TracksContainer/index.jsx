import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import useFilterIncludes from '../../hooks/useFilterIncudles';
import Empty from '../Empty';
import SearchBar from '../SearchBar';
import TrackCard from '../TrackCard';
import './style.css';

const TracksContainer = ({ trackList }) => {
  console.log('pior que');
  const [filteredTracks, setFilteredTracks] = useFilterIncludes(trackList);
  const musicVideos = useSelector((state) => state.musicVideos);
  const videosTrack = musicVideos.map(({ strTrack }) => strTrack);
  return (
    <div className="TracksContainer">
      <SearchBar setFiltered={setFilteredTracks} objectKey="strTrack" />
      <div className="trackList">
        {filteredTracks.length
          ? filteredTracks.map(({ strTrack }) => (
            <TrackCard key={uuidv4()} trackName={strTrack} videosTrack={videosTrack} />
          ))
          : <Empty />}
      </div>
    </div>
  );
};

export default TracksContainer;

TracksContainer.propTypes = {
  trackList: arrayOf(shape({
    strTrack: string,
  })).isRequired,
};
