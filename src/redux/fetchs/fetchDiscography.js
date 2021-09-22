import fetchApi from '../../services/fetchApi';
import { actionDiscography, actionError } from '../actions';

const fetchDiscography = (id) => async (dispatch) => {
  const { album, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/album.php?i=${id}`);

  if (error) return dispatch(actionError);

  return dispatch(actionDiscography(album));
};

export default fetchDiscography;
