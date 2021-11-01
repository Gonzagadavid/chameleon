import addFavorite from './add/addFavorite';
import checkFavoritesExists from './check/checkFavoritesExists';
import favoriteState from './check/favoriteState';
import removeFavorite from './remove/removeFavorite';

const favoriteAdm = (type, item) => {
  const checkFavorite = checkFavoritesExists() && favoriteState(type, item);
  if (checkFavorite) return removeFavorite(type, item);
  return addFavorite(type, item);
};

export default favoriteAdm;
