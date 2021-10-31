import { ARTIST_DETAILS } from '../../../constants/routes';
import removeFavoriteAlbum from './removeFavoriteAlbum';
import removeFavoriteArtist from './removeFavoriteArtist';

const removeFavorite = (artist, pathName, item) => {
  if (pathName === ARTIST_DETAILS) return removeFavoriteArtist(artist);
  if (/discography/g.test(pathName)) return removeFavoriteAlbum(artist, item);
  return false;
};
export default removeFavorite;
