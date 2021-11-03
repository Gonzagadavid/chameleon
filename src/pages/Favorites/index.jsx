import React from 'react';
import { useSelector } from 'react-redux';
import useAlbumsAndVideos from '../../hooks/useAlbumsAndVideos';
import AlbumsContainer from '../../components/AlbumsContainer';
import Loading from '../../components/Loading';
import TracksContainer from '../../components/TracksContainer';
import getFavoriteAlbums from '../../services/favorites/get/getFavoriteAlbums';
import getFavoriteTracks from '../../services/favorites/get/getFavoriteTracks';
import './style.css';
import Empty from '../../components/Empty';

const Favorites = () => {
  const [albums] = useAlbumsAndVideos();
  const favoriteAlbums = getFavoriteAlbums();
  const favoriteTracks = getFavoriteTracks();
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;

  const albumsFiltered = albums.filter(({ strAlbum }) => favoriteAlbums.includes(strAlbum));

  if (!albumsFiltered.length && !favoriteTracks.length) return <Empty />;

  return (
    <div className="Favorites">
      <h2>Favorites</h2>
      <h3>Albums</h3>
      <AlbumsContainer albums={albumsFiltered} />
      <h3>Tracks</h3>
      <TracksContainer trackList={favoriteTracks} />
    </div>
  );
};

export default Favorites;
