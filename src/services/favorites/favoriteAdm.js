import addFavorite from './add/addFavorite';
import checkFavoritesExists from './check/checkFavoritesExists';
import favoriteState from './check/favoriteState';
import removeFavorite from './remove/removeFavorite';

const favoriteAdm = (artist, pathName, item) => {
  const checkFavorite = checkFavoritesExists(artist) && favoriteState(artist, pathName, item);
  if (checkFavorite) return removeFavorite(artist, pathName, item);
  return addFavorite(artist, pathName, item);
};

export default favoriteAdm;
