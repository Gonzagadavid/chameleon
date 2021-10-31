import { FAVORITE_KEY } from '../../../constants/storage';
import getLocal from '../../storage/getLocal';

const getFavorites = () => {
  const favorites = getLocal(FAVORITE_KEY) || {};
  return favorites;
};
export default getFavorites;
