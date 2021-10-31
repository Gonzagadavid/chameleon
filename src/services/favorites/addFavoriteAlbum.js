import setLocal from '../storage/setLocal';
import getFavorite from './getFavorite';
import getFavorites from './getFavorites';

const addFavoriteAlbum = (artist, album) => {
  const favorites = getFavorites();
  const { albums } = getFavorite(artist);
  const newAlbums = [...albums, album];
  const newFavorites = { ...favorites, [artist]: { ...favorites[artist], albums: newAlbums } };
  return setLocal('favorite-artist', newFavorites);
};
export default addFavoriteAlbum;
