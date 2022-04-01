import React from 'react';
import AlbumsContainer from '../../components/AlbumsContainer';
import Loading from '../../components/Loading';
import TracksContainer from '../../components/TracksContainer';
import './style.css';
import Empty from '../../components/Empty';
import useFavorites from '../../hooks/useFavorites';
import CheckComponent from '../../components/CheckComponent';

const Favorites = () => {
  const [favoriteAlbums, favoriteTracks] = useFavorites();

  return (
    <Loading className="Favorites">
      <Empty condition={!!(favoriteAlbums.length || favoriteTracks.length)}>
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
      </Empty>
    </Loading>
  );
};

export default Favorites;
