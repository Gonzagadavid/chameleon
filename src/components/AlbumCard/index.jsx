import { string, shape } from 'prop-types';
import React from 'react';
import './style.css';

const AlbumCard = ({ album }) => {
  const { strAlbumThumb } = album;
  return (
    <div>
      <img src={strAlbumThumb} alt="album cover" />
    </div>
  );
};

export default AlbumCard;

AlbumCard.propTypes = {
  album: shape({
    strAlbumThumb: string,
  }).isRequired,
};
