import checkAlbumExists from './check/checkAlbumExists';
import checkFavoritesExists from './check/checkFavoritesExists';

const favoriteState = (artist, pathName, item) => {
  if (!checkFavoritesExists(artist)) return false;
  if (pathName === '/artist-details') return checkFavoritesExists(artist);
  if (pathName === '/artist-details/discography') return checkAlbumExists(artist, item);
  return false;
};

export default favoriteState;
