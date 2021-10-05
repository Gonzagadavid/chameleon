import fetchApi from '../../services/fetchApi';
import { actionError, actionMusicVideos } from '../actions';

const fetchVideos = (id) => async (dispatch) => {
  const { mvids, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${id}`);

  if (error) return dispatch(actionError);

  return dispatch(actionMusicVideos(mvids));
};

export default fetchVideos;
