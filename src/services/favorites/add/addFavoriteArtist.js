import { FAVORITE_KEY } from '../../../constants/storage';
import getLocal from '../../storage/getLocal';
import checkFavoritesExists from '../check/checkFavoritesExists';
import setFavorites from '../set/setFavorites';

const addFavoriteArtist = (artistName) => {
  const favorites = getLocal(FAVORITE_KEY) || {};
  if (checkFavoritesExists()) return;
  favorites[artistName] = { track: [], albums: [] };
  setFavorites(favorites);
};

export default addFavoriteArtist;
