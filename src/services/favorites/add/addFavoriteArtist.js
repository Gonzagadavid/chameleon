import store from '../../../redux/store';
import checkFavoritesExists from '../check/checkFavoritesExists';
import getFavorites from '../get/getFavorites';
import setFavorites from '../set/setFavorites';

const addFavoriteArtist = () => {
  const { artistCurrent, logo } = store.getState();
  const favorites = getFavorites();
  if (checkFavoritesExists()) return;
  favorites[artistCurrent.toLowerCase()] = { tracks: [], albums: [], logo };
  setFavorites(favorites);
};

export default addFavoriteArtist;
