import addFavorite from './add/addFavorite';
import checkFavoritesExists from './check/checkFavoritesExists';
import favoriteState from './check/favoriteState';
import removeFavorite from './remove/removeFavorite';

const favoriteAdm = (pathName, item) => {
  const checkFavorite = checkFavoritesExists() && favoriteState(pathName, item);
  if (checkFavorite) return removeFavorite(pathName, item);
  return addFavorite(pathName, item);
};

export default favoriteAdm;
