import store from '../../../redux/store';
import getFavorites from './getFavorites';

const getFavorite = () => {
  const { artistCurrent } = store.getState();
  const favorites = getFavorites();
  const favorite = favorites[artistCurrent];
  return favorite;
};
export default getFavorite;
