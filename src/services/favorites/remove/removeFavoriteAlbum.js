import setLocal from '../../storage/setLocal';
import getFavorite from '../get/getFavorite';
import getFavorites from '../get/getFavorites';

const removeFavoriteAlbum = (artist, item) => {
  const favorites = getFavorites();
  const { albums } = getFavorite(artist);
  const albumsFitered = albums.filter((oldItem) => oldItem !== item);

  const newFavorites = { ...favorites, [artist]: { ...favorites[artist], albums: albumsFitered } };
  return setLocal('favorite-artist', newFavorites);
};
export default removeFavoriteAlbum;
