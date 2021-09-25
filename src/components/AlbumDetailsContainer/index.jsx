import { string } from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAlbum from '../../redux/fetchs/fetchAlbum';
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
    strAlbum, strAlbumThumb, strAlbumThumbBack, intYearReleased,
  } = album;

  return (
    <div>
      <h3>
        { strAlbum }
        <span>{`(${intYearReleased})`}</span>
      </h3>
      <img src={strAlbumThumb} alt="album front" />
      <SelectLanguage setLanguage={setLanguage} objectItems={album} keyOption="strDescription" />
      <p>{description}</p>
      {strAlbumThumbBack && <img src={strAlbumThumbBack} alt="album back" />}
    </div>
  );
};

export default AlbumDetailsContainer;

AlbumDetailsContainer.propTypes = {
  id: string.isRequired,
};
