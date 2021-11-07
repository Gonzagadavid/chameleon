import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import useFilterIncludes from '../../hooks/useFilterIncudles';
import Empty from '../Empty';
import SearchBar from '../SearchBar';
import TrackCard from '../TrackCard';
import './style.css';
import useFetchReturnState from '../../hooks/useFetchReturnState';
import fetchVideos from '../../redux/fetchs/fetchVideos';

const TracksContainer = ({ trackList }) => {
  const idArtist = useSelector((state) => state.artistDetails.idArtist);
  const [filteredTracks, setFilteredTracks] = useFilterIncludes(trackList);
  const [musicVideos] = useFetchReturnState(fetchVideos, idArtist, 'musicVideos');
  const videosTrack = musicVideos.map(({ strTrack }) => strTrack);

  return (
    <div className="TracksContainer">
      <SearchBar setFiltered={setFilteredTracks} objectKey="strTrack" />
      <Empty condition={!!filteredTracks.length}>
        <div className="trackList">
          {filteredTracks.map(({ strTrack }) => (
            <TrackCard key={uuidv4()} trackName={strTrack} videosTrack={videosTrack} />
          ))}
        </div>
      </Empty>
    </div>
  );
};

export default TracksContainer;

TracksContainer.propTypes = {
  trackList: arrayOf(shape({
    strTrack: string,
  })).isRequired,
};
