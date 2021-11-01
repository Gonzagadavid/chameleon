import { ARTIST_DETAILS } from '../../../constants/routes';
import removeFavoriteAlbum from './removeFavoriteAlbum';
import removeFavoriteArtist from './removeFavoriteArtist';

const removeFavorite = (pathName, item) => {
  if (pathName === ARTIST_DETAILS) return removeFavoriteArtist();
  if (/discography/g.test(pathName)) return removeFavoriteAlbum(item);
  return false;
};
export default removeFavorite;
