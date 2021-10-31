import getFavorite from './getFavorite';

const checkAlbumExists = (artist, item) => {
  const favorite = getFavorite(artist);
  const { albums } = favorite;
  return albums.includes(item);
};
export default checkAlbumExists;
