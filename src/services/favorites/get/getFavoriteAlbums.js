import getFavorite from './getFavorite';

const getFavoriteAlbums = (artist) => {
  const { albums } = getFavorite(artist);
  return albums;
};

export default getFavoriteAlbums;
