import getFavorite from './getFavorite';

const getFavoriteAlbums = () => {
  const { albums } = getFavorite();
  return albums;
};

export default getFavoriteAlbums;
