import store from '../../../redux/store';
import getFavorite from '../get/getFavorite';
import getFavorites from '../get/getFavorites';
import setFavorites from '../set/setFavorites';

const addFavoriteAlbum = (album) => {
  const { artistCurrent } = store.getState();
  const favorites = getFavorites();
  const { albums } = getFavorite(artistCurrent);
  const newAlbums = [...albums, album];
  const newFavorites = {
    ...favorites,
    [artistCurrent]: {
      ...favorites[artistCurrent],
      albums: newAlbums,
    },
  };
  return setFavorites(newFavorites);
};
export default addFavoriteAlbum;
