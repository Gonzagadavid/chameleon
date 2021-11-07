import React from 'react';
import { useSelector } from 'react-redux';
import AlbumsContainer from '../../components/AlbumsContainer';
import Loading from '../../components/Loading';
import useFetchReturnState from '../../hooks/useFetchReturnState';
import fetchDiscography from '../../redux/fetchs/fetchDiscography';
import './style.css';

const Discography = () => {
  const artistId = useSelector((state) => state.artistDetails.idArtist);
  const [albums] = useFetchReturnState(fetchDiscography, artistId, 'albums');

  return (
    <Loading className="Discography">
      <h2>Discography</h2>
      <AlbumsContainer albums={albums} />
    </Loading>
  );
};

export default Discography;
