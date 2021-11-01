import addFavoriteItem from './addFavoriteItem';
import addFavoriteArtist from './addFavoriteArtist';
import checkFavoritesExists from '../check/checkFavoritesExists';
import { ARTIST } from '../../../constants/types';

const addFavorite = (type, item) => {
  if (!checkFavoritesExists()) addFavoriteArtist();
  if (type === ARTIST) return null;
  return addFavoriteItem(type, item);
};
export default addFavorite;
