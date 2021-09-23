import React from 'react';
import { useSelector } from 'react-redux';
import AlbumCard from '../AlbumCard';
import './style.css';

const AlbumsContainer = () => {
  const albums = useSelector((state) => state.albums);

  return (
    <div className="AlbumsContainer">
      {albums.map((album) => <AlbumCard key={album.idAlbum} album={album} />)}
    </div>
  );
};

export default AlbumsContainer;
