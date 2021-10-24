import fetchApi from '../../services/fetch/fetchApi';
import { actionError, actionLoading, actionMusicVideos } from '../actions';

const fetchVideos = (id) => async (dispatch) => {
  dispatch(actionLoading);
  const { mvids, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${id}`);

  if (error) return dispatch(actionError);

  if (!mvids) return dispatch(actionMusicVideos([{ strTrack: 'Not Found Videos' }]));

  return dispatch(actionMusicVideos(mvids));
};

export default fetchVideos;
