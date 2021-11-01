import addFavoriteAlbum from './addFavoriteAlbum';
import addFavoriteArtist from './addFavoriteArtist';
import checkFavoritesExists from '../check/checkFavoritesExists';
import { ARTIST_DETAILS } from '../../../constants/routes';

const addFavorite = (pathName, item) => {
  if (!checkFavoritesExists()) addFavoriteArtist();
  if (pathName === ARTIST_DETAILS) return null;
  if (/discography/g.test(pathName)) return addFavoriteAlbum(item);
  return null;
};
export default addFavorite;
