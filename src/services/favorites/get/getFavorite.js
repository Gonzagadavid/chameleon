import { FAVORITE_KEY } from '../../../constants/storage';
import getLocal from '../../storage/getLocal';

const getFavorite = (artist) => {
  const favorites = getLocal(FAVORITE_KEY) || {};
  const favorite = favorites[artist];
  return favorite;
};
export default getFavorite;
