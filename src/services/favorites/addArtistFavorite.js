import getLocal from '../storage/getLocal';
import setLocal from '../storage/setLocal';

const addArtistFavorite = (artistName) => {
  const favorites = getLocal('artist-favorite') || {};
  const checkExists = Object.keys(favorites).includes(artistName);
  if (checkExists) return;
  favorites[artistName] = { track: [], albums: [] };
  setLocal('artist-favorite', favorites);
};

export default addArtistFavorite;
