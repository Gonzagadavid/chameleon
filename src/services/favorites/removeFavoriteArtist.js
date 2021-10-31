import getLocal from '../storage/getLocal';
import setLocal from '../storage/setLocal';
import getFavoritesArtists from './getFavoritesArtists';

const removeFavoriteArtist = (artist) => {
  const favoritesKeys = getFavoritesArtists().filter((artistKey) => artistKey !== artist);
  const favorites = getLocal('favorite-artist') || {};
  const newFavorites = favoritesKeys.reduce((acc, key) => {
    const objFavorites = acc;
    objFavorites[key] = favorites[key];
    return objFavorites;
  }, {});
  setLocal('favorite-artist', newFavorites);
};

export default removeFavoriteArtist;
