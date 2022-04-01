import getFavorites from './getFavorites';

const getFavoritesArtists = () => {
  const favorites = getFavorites();
  return Object.keys(favorites);
};

export default getFavoritesArtists;
