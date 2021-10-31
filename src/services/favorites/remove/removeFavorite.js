import { ARTIST_DETAILS, DISCOGRAPHY } from '../../../constants/routes';
import removeFavoriteAlbum from './removeFavoriteAlbum';
import removeFavoriteArtist from './removeFavoriteArtist';

const removeFavorite = (artist, pathName, item) => {
  if (pathName === ARTIST_DETAILS) return removeFavoriteArtist(artist);
  if (pathName === DISCOGRAPHY) return removeFavoriteAlbum(artist, item);
  return false;
};
export default removeFavorite;
