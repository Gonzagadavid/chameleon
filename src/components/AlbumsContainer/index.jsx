import { arrayOf } from 'prop-types';
import React, { useEffect, useState } from 'react';
import useFilterIncludes from '../../hooks/useFilterIncudles';
import AlbumCard from '../AlbumCard';
import './style.css';

const AlbumsContainer = ({ albums }) => {
  const [search, setSearch] = useState('');
  const [filteredAlbums, setFilteredALbums] = useFilterIncludes(albums);

  useEffect(() => {
    setFilteredALbums(search, 'strAlbum');
  }, [search]);
  return (
    <div className="AlbumsContainer">
      <input value={search} onInput={({ target: { value } }) => setSearch(value)} placeholder="Search By Title..." />
      {filteredAlbums.map((album) => <AlbumCard key={album.idAlbum} album={album} />)}
    </div>
  );
};

export default AlbumsContainer;

AlbumsContainer.propTypes = {
  albums: arrayOf(['objectOf']).isRequired,
};
