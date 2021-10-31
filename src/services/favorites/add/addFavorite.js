import addFavoriteAlbum from './addFavoriteAlbum';
import addFavoriteArtist from './addFavoriteArtist';
import checkFavoritesExists from '../check/checkFavoritesExists';
import { ARTIST_DETAILS } from '../../../constants/routes';

const addFavorite = (artist, pathName, item) => {
  if (!checkFavoritesExists(artist)) addFavoriteArtist(artist);
  if (pathName === ARTIST_DETAILS) return null;
  if (pathName === '/artist-details/discography') return addFavoriteAlbum(artist, item);
  return null;
};
export default addFavorite;
