import checkFavoritesExists from './checkFavoritesExists';

const favoriteState = (artist, pathName) => {
  if (pathName === '/artist-details') return checkFavoritesExists(artist);
  return false;
};

export default favoriteState;
