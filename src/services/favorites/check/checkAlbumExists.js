import getFavorite from '../get/getFavorite';

const checkAlbumExists = (type, item) => {
  const favorite = getFavorite();
  return favorite[type].includes(item);
};
export default checkAlbumExists;
