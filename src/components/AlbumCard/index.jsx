import { string, shape } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../images/empty-image.png';
import './style.css';

const AlbumCard = ({ album }) => {
  const {
    strAlbumThumb, strAlbum, intYearReleased, idAlbum,
  } = album;
  return (
    <div className="AlbumCard">
      <Link to={`/artist-details/discography/${idAlbum}`}>
        <div className="imgAlbum">
          <img src={strAlbumThumb || NotFoundImage} alt="album cover" />
        </div>
        <div className="infoAlbum">
          <h3>{strAlbum}</h3>
          <p>{ intYearReleased }</p>
        </div>
      </Link>
    </div>
  );
};

export default AlbumCard;

AlbumCard.propTypes = {
  album: shape({
    strAlbumThumb: string,
    strAlbum: string,
    idAlbum: string,
  }).isRequired,
};
