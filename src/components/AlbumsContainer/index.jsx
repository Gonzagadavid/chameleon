import { arrayOf, objectOf } from 'prop-types';
import React from 'react';
import useFilterIncludes from '../../hooks/useFilterIncudles';
import AlbumCard from '../AlbumCard';
import Empty from '../Empty';
import SearchBar from '../SearchBar';
import './style.css';

const AlbumsContainer = ({ albums }) => {
  const [filteredAlbums, setFilteredALbums] = useFilterIncludes(albums);
  return (
    <div className="AlbumsContainer">
      <SearchBar setFiltered={setFilteredALbums} objectKey="strAlbum" />
      <div className="albumList">
        { filteredAlbums.length
          ? filteredAlbums.map((album) => <AlbumCard key={album.idAlbum} album={album} />)
          : <Empty />}
      </div>
    </div>
  );
};

export default AlbumsContainer;

AlbumsContainer.propTypes = {
  albums: arrayOf(objectOf).isRequired,
};
