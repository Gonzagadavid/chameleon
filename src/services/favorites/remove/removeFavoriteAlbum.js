import store from '../../../redux/store';
import getFavorite from '../get/getFavorite';
import getFavorites from '../get/getFavorites';
import setFavorites from '../set/setFavorites';

const removeFavoriteAlbum = (item) => {
  const { artistCurrent } = store.getState();
  const favorites = getFavorites();
  const { albums } = getFavorite();
  const albumsFitered = albums.filter((oldItem) => oldItem !== item);

  const newFavorites = {
    ...favorites,
    [artistCurrent]: {
      ...favorites[artistCurrent],
      albums: albumsFitered,
    },
  };
  return setFavorites(newFavorites);
};
export default removeFavoriteAlbum;
