import store from '../../../redux/store';
import getFavorites from './getFavorites';

const getFavorite = () => {
  const { artistCurrent } = store.getState();
  const favorites = getFavorites();
  return favorites[artistCurrent] || { albums: [], tracks: [] };
};
export default getFavorite;
