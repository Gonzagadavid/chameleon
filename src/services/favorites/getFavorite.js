import getLocal from '../storage/getLocal';

const getFavorite = (artist) => {
  const favorites = getLocal('favorite-artist') || {};
  const favorite = favorites[artist];
  return favorite;
};
export default getFavorite;
