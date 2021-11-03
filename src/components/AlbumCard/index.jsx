import { string, shape } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ALBUMS } from '../../constants/types';
import NotFoundImage from '../../images/empty-image.png';
import Favorite from '../Favorite';
import './style.css';

const AlbumCard = ({ album }) => {
  const {
    strAlbumThumb, strAlbum, intYearReleased, idAlbum,
  } = album;
  return (
    <div className="AlbumCard">
      <Favorite item={strAlbum} type={ALBUMS} />
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
