import { useEffect, useState } from 'react';
import getFavoriteAlbums from '../services/favorites/get/getFavoriteAlbums';
import getFavoriteTracks from '../services/favorites/get/getFavoriteTracks';
import useAlbumsAndVideos from './useAlbumsAndVideos';

const useFavorites = () => {
  const [albumsFiltered, setAlbumsFiltered] = useState([]);
  const [albums] = useAlbumsAndVideos();
  const favoriteAlbums = getFavoriteAlbums();
  const favoriteTracks = getFavoriteTracks();
  useEffect(() => {
    if (!albums.length) return;
    const filtered = albums.filter(({ strAlbum }) => favoriteAlbums.includes(strAlbum));
    setAlbumsFiltered(filtered);
  }, [albums]);

  return [albumsFiltered, favoriteTracks];
};
export default useFavorites;
