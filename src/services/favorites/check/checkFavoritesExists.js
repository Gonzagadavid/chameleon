import store from '../../../redux/store';
import getFavoritesArtists from '../get/getFavoritesArtists';

const checkFavoritesExists = () => {
  const { artistCurrent } = store.getState();
  return getFavoritesArtists().includes(artistCurrent);
};

export default checkFavoritesExists;
