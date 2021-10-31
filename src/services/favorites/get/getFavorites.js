import getLocal from '../../storage/getLocal';

const getFavorites = () => {
  const favorites = getLocal('favorite-artist') || {};
  return favorites;
};
export default getFavorites;
