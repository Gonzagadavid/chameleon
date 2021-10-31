import { FAVORITE_KEY } from '../../../constants/storage';
import setLocal from '../../storage/setLocal';

const setFavorites = (content) => setLocal(FAVORITE_KEY, content);

export default setFavorites;
