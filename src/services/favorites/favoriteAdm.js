import addFavorite from './addFavorite';
import favoriteState from './favoriteState';
import removeFavorite from './removeFavorite';

const favoriteAdm = (artist, pathName) => {
  const checkFavorite = favoriteState(artist, pathName);
  if (checkFavorite) return removeFavorite(artist, pathName);
  return addFavorite(artist, pathName);
};

export default favoriteAdm;
