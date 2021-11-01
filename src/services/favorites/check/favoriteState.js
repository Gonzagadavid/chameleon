import { ARTIST_DETAILS } from '../../../constants/routes';
import checkAlbumExists from './checkAlbumExists';
import checkFavoritesExists from './checkFavoritesExists';

const favoriteState = (pathName, item) => {
  if (!checkFavoritesExists()) return false;
  if (pathName === ARTIST_DETAILS) return checkFavoritesExists();
  if (/discography/g.test(pathName)) return checkAlbumExists(item);
  return false;
};

export default favoriteState;
