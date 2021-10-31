import { FAVORITE_KEY } from '../../../constants/storage';
import getLocal from '../../storage/getLocal';
import setLocal from '../../storage/setLocal';
import checkFavoritesExists from '../check/checkFavoritesExists';

const addFavoriteArtist = (artistName) => {
  const favorites = getLocal(FAVORITE_KEY) || {};
  if (checkFavoritesExists()) return;
  favorites[artistName] = { track: [], albums: [] };
  setLocal(FAVORITE_KEY, favorites);
};

export default addFavoriteArtist;
