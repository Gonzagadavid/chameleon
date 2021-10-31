import removeFavoriteArtist from './removeFavoriteArtist';

const removeFavorite = (artist, pathName) => {
  if (pathName === '/artist-details') return removeFavoriteArtist(artist);
  return false;
};
export default removeFavorite;
