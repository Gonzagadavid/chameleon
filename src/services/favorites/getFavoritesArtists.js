import getLocal from '../storage/getLocal';

const getFavoritesArtists = () => {
  const favorites = getLocal('favorite-artist') || {};
  const favoriteList = Object.keys(favorites);
  return favoriteList;
};

export default getFavoritesArtists;
