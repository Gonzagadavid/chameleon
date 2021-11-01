import { FAVORITE_KEY } from '../../../constants/storage';
import store from '../../../redux/store';
import getLocal from '../../storage/getLocal';

const getFavorite = () => {
  const { artistCurrent } = store.getState();
  const favorites = getLocal(FAVORITE_KEY) || {};
  const favorite = favorites[artistCurrent];
  return favorite;
};
export default getFavorite;
