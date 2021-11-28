import fetchApi from '../../services/fetch/fetchApi';
import { actionError, actionLoading, actionMusicVideos } from '../actions';

const fetchVideos = (id) => async (dispatch) => {
  dispatch(actionLoading);
  const { mvids, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/2/mvid.php?i=${id}`);

  if (error) return dispatch(actionError);

  return dispatch(actionMusicVideos(mvids));
};

export default fetchVideos;
