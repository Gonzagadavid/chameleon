import removeFavoriteAlbum from './removeFavoriteAlbum';
import removeFavoriteArtist from './removeFavoriteArtist';

const removeFavorite = (artist, pathName, item) => {
  if (pathName === '/artist-details') return removeFavoriteArtist(artist);
  if (pathName === '/artist-details/discography') return removeFavoriteAlbum(artist, item);
  return false;
};
export default removeFavorite;
