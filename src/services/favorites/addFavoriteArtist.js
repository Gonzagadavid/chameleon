import getLocal from '../storage/getLocal';
import setLocal from '../storage/setLocal';
import checkFavoritesExists from './checkFavoritesExists';

const addFavoriteArtist = (artistName) => {
  const favorites = getLocal('favorite-artist') || {};
  console.log(artistName);
  if (checkFavoritesExists()) return;
  favorites[artistName] = { track: [], albums: [] };
  setLocal('favorite-artist', favorites);
};

export default addFavoriteArtist;
