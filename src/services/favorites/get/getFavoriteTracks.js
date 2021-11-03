import getFavorite from './getFavorite';

const getFavoriteTracks = () => {
  const { tracks } = getFavorite();
  return tracks;
};

export default getFavoriteTracks;
