import addFavoriteAlbum from './addFavoriteAlbum';
import addFavoriteArtist from './addFavoriteArtist';
import checkFavoritesExists from './checkFavoritesExists';

const addFavorite = (artist, pathName, item) => {
  if (!checkFavoritesExists(artist)) addFavoriteArtist(artist);
  if (pathName === '/artist-details') return null;
  if (pathName === '/artist-details/discography') return addFavoriteAlbum(artist, item);
  return null;
};
export default addFavorite;
