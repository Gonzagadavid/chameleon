import store from '../../../redux/store';
import getFavorite from '../get/getFavorite';
import getFavorites from '../get/getFavorites';
import setFavorites from '../set/setFavorites';

const removeFavoriteItem = (type, item) => {
  const { artistCurrent } = store.getState();
  const favorites = getFavorites();
  const favorite = getFavorite();
  const albumsFitered = favorite[type].filter((oldItem) => oldItem !== item);

  const newFavorites = {
    ...favorites,
    [artistCurrent]: {
      ...favorites[artistCurrent],
      [type]: albumsFitered,
    },
  };
  return setFavorites(newFavorites);
};
export default removeFavoriteItem;
