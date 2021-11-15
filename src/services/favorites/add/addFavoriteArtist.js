import store from '../../../redux/store';
import getFavorites from '../get/getFavorites';
import setFavorites from '../set/setFavorites';

const addFavoriteArtist = () => {
  const { artistCurrent, logo } = store.getState();
  const favorites = getFavorites();
  favorites[artistCurrent.toLowerCase()] = { tracks: [], albums: [], logo };
  setFavorites(favorites);
};

export default addFavoriteArtist;
