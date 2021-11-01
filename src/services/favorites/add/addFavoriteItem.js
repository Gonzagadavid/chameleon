import store from '../../../redux/store';
import getFavorite from '../get/getFavorite';
import getFavorites from '../get/getFavorites';
import setFavorites from '../set/setFavorites';

const addFavoriteAlbum = (type, item) => {
  const { artistCurrent } = store.getState();
  const favorites = getFavorites();
  const favorite = getFavorite();
  const newAlbums = [...favorite[type], item];
  const newFavorites = {
    ...favorites,
    [artistCurrent]: {
      ...favorites[artistCurrent],
      [type]: newAlbums,
    },
  };
  return setFavorites(newFavorites);
};
export default addFavoriteAlbum;
