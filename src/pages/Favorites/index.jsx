import React from 'react';
// import { useSelector } from 'react-redux';
import AlbumsContainer from '../../components/AlbumsContainer';
import Loading from '../../components/Loading';
import TracksContainer from '../../components/TracksContainer';
import './style.css';
import Empty from '../../components/Empty';
import useFavorites from '../../hooks/useFavorites';
import CheckComponent from '../../components/CheckComponent';

const Favorites = () => {
  // const loading = useSelector((state) => state.loading);
  const [favoriteAlbums, favoriteTracks] = useFavorites();

  // if (loading) return <Loading />;

  return (
    <Loading className="Favorites">
      <h2>Favorites</h2>
      <CheckComponent condition={favoriteAlbums.length}>
        <h3 className="title-container">Albums</h3>
        <AlbumsContainer albums={favoriteAlbums} />
      </CheckComponent>
      <CheckComponent condition={favoriteTracks.length}>
        <div>
          <h3 className="title-container">Tracks</h3>
          <TracksContainer trackList={favoriteTracks} />
        </div>
      </CheckComponent>
      <CheckComponent condition={!favoriteAlbums.length && !favoriteTracks.length}>
        <Empty />
      </CheckComponent>
    </Loading>
  );
};

export default Favorites;
