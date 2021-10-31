import { FAVORITE_KEY } from '../../../constants/storage';
import getLocal from '../../storage/getLocal';

const getFavoritesArtists = () => {
  const favorites = getLocal(FAVORITE_KEY) || {};
  const favoriteList = Object.keys(favorites);
  return favoriteList;
};

export default getFavoritesArtists;
