import { ARTIST } from '../../../constants/types';
import checkAlbumExists from './checkAlbumExists';
import checkFavoritesExists from './checkFavoritesExists';

const favoriteState = (type, item) => {
  if (!checkFavoritesExists()) return false;
  if (type === ARTIST) return checkFavoritesExists();
  return checkAlbumExists(type, item);
};

export default favoriteState;
