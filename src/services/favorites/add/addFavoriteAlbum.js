import setLocal from '../../storage/setLocal';
import getFavorite from '../get/getFavorite';
import getFavorites from '../get/getFavorites';

const addFavoriteAlbum = (artist, album) => {
  const favorites = getFavorites();
  const { albums } = getFavorite(artist);
  const newAlbums = [...albums, album];
  const newFavorites = { ...favorites, [artist]: { ...favorites[artist], albums: newAlbums } };
  return setLocal('favorite-artist', newFavorites);
};
export default addFavoriteAlbum;
