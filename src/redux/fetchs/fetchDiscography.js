import arraySortNum from '../../functions/arraySortNum';
import fetchApi from '../../services/fetch/fetchApi';
import { actionDiscography, actionError, actionLoading } from '../actions';

const fetchDiscography = (id) => async (dispatch) => {
  dispatch(actionLoading);
  const { album, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`);

  if (error) return dispatch(actionError);

  const albuns = arraySortNum(album, 'intYearReleased');
  return dispatch(actionDiscography(albuns));
};

export default fetchDiscography;
