import React from 'react';
import AlbumsContainer from '../../components/AlbumsContainer';
import Loading from '../../components/Loading';
import useAlbumsAndVideos from '../../hooks/useAlbumsAndVideos';
import './style.css';

const Discography = () => {
  const [albums] = useAlbumsAndVideos();

  return (
    <Loading className="Discography">
      <h2>Discography</h2>
      <AlbumsContainer albums={albums} />
    </Loading>
  );
};

export default Discography;
