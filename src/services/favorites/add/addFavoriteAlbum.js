import getFavorite from '../get/getFavorite';
import getFavorites from '../get/getFavorites';
import setFavorites from '../set/setFavorites';

const addFavoriteAlbum = (artist, album) => {
  const favorites = getFavorites();
  const { albums } = getFavorite(artist);
  const newAlbums = [...albums, album];
  const newFavorites = { ...favorites, [artist]: { ...favorites[artist], albums: newAlbums } };
  return setFavorites(newFavorites);
};
export default addFavoriteAlbum;
