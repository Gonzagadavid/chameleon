import getFavorite from '../get/getFavorite';

const checkAlbumExists = (item) => {
  const favorite = getFavorite();
  const { albums } = favorite;
  return albums.includes(item);
};
export default checkAlbumExists;
