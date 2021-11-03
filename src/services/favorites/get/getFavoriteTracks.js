import getFavorite from './getFavorite';

const getFavoriteTracks = () => {
  const { tracks } = getFavorite();
  return tracks.map((track) => ({ strTrack: track }));
};

export default getFavoriteTracks;
