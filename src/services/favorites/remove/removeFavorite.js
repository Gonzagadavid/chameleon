import { ARTIST } from '../../../constants/types';
import removeFavoriteItem from './removeFavoriteItem';
import removeFavoriteArtist from './removeFavoriteArtist';

const removeFavorite = (type, item) => {
  if (type === ARTIST) return removeFavoriteArtist();
  return removeFavoriteItem(type, item);
};
export default removeFavorite;
