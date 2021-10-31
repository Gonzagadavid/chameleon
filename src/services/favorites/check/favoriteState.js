import { ARTIST_DETAILS, DISCOGRAPHY } from '../../../constants/routes';
import checkAlbumExists from './checkAlbumExists';
import checkFavoritesExists from './checkFavoritesExists';

const favoriteState = (artist, pathName, item) => {
  if (!checkFavoritesExists(artist)) return false;
  if (pathName === ARTIST_DETAILS) return checkFavoritesExists(artist);
  if (pathName === DISCOGRAPHY) return checkAlbumExists(artist, item);
  return false;
};

export default favoriteState;
