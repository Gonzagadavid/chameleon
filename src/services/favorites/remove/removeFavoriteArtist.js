import { FAVORITE_KEY } from '../../../constants/storage';
import getLocal from '../../storage/getLocal';
import getFavoritesArtists from '../get/getFavoritesArtists';
import setFavorites from '../set/setFavorites';

const removeFavoriteArtist = (artist) => {
  const favoritesKeys = getFavoritesArtists().filter((artistKey) => artistKey !== artist);
  const favorites = getLocal(FAVORITE_KEY) || {};
  const newFavorites = favoritesKeys.reduce((acc, key) => {
    const objFavorites = acc;
    objFavorites[key] = favorites[key];
    return objFavorites;
  }, {});
  setFavorites(newFavorites);
};

export default removeFavoriteArtist;
