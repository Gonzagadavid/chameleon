import { string } from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAlbum from '../../redux/fetchs/fetchAlbum';
import Favorite from '../Favorite';
import SelectLanguage from '../SelectLanguage';
import './style.css';

const AlbumDetailsContainer = ({ id }) => {
  const album = useSelector((state) => state.album);
  const [language, setLanguage] = useState('EN');
  const dispatch = useDispatch();
  const getAlbum = useCallback(async () => dispatch(fetchAlbum(id)), []);
  useEffect(() => { getAlbum(); }, []);

  if (!album) return <p>loading</p>;

  const description = album[`strDescription${language}`];
  const {
    strAlbum, strAlbumThumb, intYearReleased, idAlbum,
  } = album;

  return (
    <div className="AlbumDetailsContainer">
      <h3>
        <Favorite item={idAlbum} />
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
  id: string.isRequired,
};
