import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ALBUMS } from '../../constants/types';
import CheckComponent from '../CheckComponent';
import Favorite from '../Favorite';
import SelectLanguage from '../SelectLanguage';
import './style.css';

const AlbumDetailsContainer = () => {
  const album = useSelector((state) => state.album);
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
      <CheckComponent condition={description}>
        <div className="description">
          <SelectLanguage setLanguage={setLanguage} objectItems={album} keyOption="strDescription" />
          <p>{description}</p>
        </div>
      </CheckComponent>
    </div>
  );
};

export default AlbumDetailsContainer;
