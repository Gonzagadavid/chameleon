import { ARTIST_DETAILS } from '../../../constants/routes';
import checkAlbumExists from './checkAlbumExists';
import checkFavoritesExists from './checkFavoritesExists';

const favoriteState = (artist, pathName, item) => {
  if (!checkFavoritesExists(artist)) return false;
  if (pathName === ARTIST_DETAILS) return checkFavoritesExists(artist);
  if (/discography/g.test(pathName)) return checkAlbumExists(artist, item);
  return false;
};

export default favoriteState;
