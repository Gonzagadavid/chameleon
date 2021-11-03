import { arrayOf, objectOf } from 'prop-types';
import React, { useState } from 'react';
import { ALBUMS } from '../../constants/types';
import Favorite from '../Favorite';
import SelectLanguage from '../SelectLanguage';
import './style.css';

const AlbumDetailsContainer = ({ album }) => {
  const [language, setLanguage] = useState('EN');
  const description = album[`strDescription${language}`];
  const {
    strAlbum, strAlbumThumb, intYearReleased, idAlbum,
  } = album;

  return (
    <div className="AlbumDetailsContainer">
      <h3>
        <Favorite item={idAlbum} type={ALBUMS} />
        { strAlbum }
        <span>{`(${intYearReleased})`}</span>
      </h3>
      <img src={strAlbumThumb} alt="album front" className="album-image" />
      <div className="description">
        {description && <SelectLanguage setLanguage={setLanguage} objectItems={album} keyOption="strDescription" />}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AlbumDetailsContainer;

AlbumDetailsContainer.propTypes = {
  album: arrayOf(objectOf).isRequired,
};
