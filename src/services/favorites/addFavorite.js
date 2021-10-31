import addFavoriteArtist from './addFavoriteArtist';

const addFavorite = (artist, pathName) => {
  if (pathName === '/artist-details') return addFavoriteArtist(artist);
  return false;
};
export default addFavorite;
