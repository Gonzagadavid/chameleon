import addFavorite from './addFavorite';
import checkFavoritesExists from './checkFavoritesExists';
import favoriteState from './favoriteState';
import removeFavorite from './removeFavorite';

const favoriteAdm = (artist, pathName, item) => {
  const checkFavorite = checkFavoritesExists(artist) && favoriteState(artist, pathName, item);
  if (checkFavorite) return removeFavorite(artist, pathName, item);
  return addFavorite(artist, pathName, item);
};

export default favoriteAdm;
