import getFavorite from '../get/getFavorite';
import getFavorites from '../get/getFavorites';
import setFavorites from '../set/setFavorites';

const removeFavoriteAlbum = (artist, item) => {
  const favorites = getFavorites();
  const { albums } = getFavorite(artist);
  const albumsFitered = albums.filter((oldItem) => oldItem !== item);

  const newFavorites = { ...favorites, [artist]: { ...favorites[artist], albums: albumsFitered } };
  return setFavorites(newFavorites);
};
export default removeFavoriteAlbum;
