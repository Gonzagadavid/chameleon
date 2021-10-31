import { FAVORITE_KEY } from '../../../constants/storage';
import getLocal from '../../storage/getLocal';
import setLocal from '../../storage/setLocal';
import getFavoritesArtists from '../get/getFavoritesArtists';

const removeFavoriteArtist = (artist) => {
  const favoritesKeys = getFavoritesArtists().filter((artistKey) => artistKey !== artist);
  const favorites = getLocal(FAVORITE_KEY) || {};
  const newFavorites = favoritesKeys.reduce((acc, key) => {
    const objFavorites = acc;
    objFavorites[key] = favorites[key];
    return objFavorites;
  }, {});
  setLocal(FAVORITE_KEY, newFavorites);
};

export default removeFavoriteArtist;
