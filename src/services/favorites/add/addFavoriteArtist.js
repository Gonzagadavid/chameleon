import { FAVORITE_KEY } from '../../../constants/storage';
import store from '../../../redux/store';
import getLocal from '../../storage/getLocal';
import checkFavoritesExists from '../check/checkFavoritesExists';
import setFavorites from '../set/setFavorites';

const addFavoriteArtist = () => {
  const { artistCurrent } = store.getState();
  const favorites = getLocal(FAVORITE_KEY) || {};
  if (checkFavoritesExists()) return;
  favorites[artistCurrent.toLowerCase()] = { tracks: [], albums: [] };
  setFavorites(favorites);
};

export default addFavoriteArtist;
