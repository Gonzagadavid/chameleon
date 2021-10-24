import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFilterIncludes from '../../hooks/useFilterIncudles';
import Empty from '../Empty';
import SearchBar from '../SearchBar';
import TrackCard from '../TrackCard';
import './style.css';

const TracksContainer = ({ trackList }) => {
  const [filteredTracks, setFilteredTracks] = useFilterIncludes(trackList);
  return (
    <div className="TracksContainer">
      <SearchBar setFiltered={setFilteredTracks} objectKey="strTrack" />
      {filteredTracks.length
        ? filteredTracks.map(({ strTrack }) => <TrackCard key={uuidv4()} trackName={strTrack} />)
        : <Empty />}
    </div>
  );
};

export default TracksContainer;

TracksContainer.propTypes = {
  trackList: arrayOf(shape({
    strTrack: string,
  })).isRequired,
};
