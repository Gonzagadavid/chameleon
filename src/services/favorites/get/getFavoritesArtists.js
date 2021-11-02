import getFavorites from './getFavorites';

const getFavoritesArtists = () => {
  const favorites = getFavorites();
  const favoriteList = Object.keys(favorites);
  return favoriteList;
};

export default getFavoritesArtists;
