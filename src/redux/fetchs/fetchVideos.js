import fetchApi from '../../services/fetch/fetchApi';
import { actionError, actionMusicVideos } from '../actions';

const fetchVideos = (id) => async (dispatch) => {
  const { mvids, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${id}`);

  if (error) return dispatch(actionError);

  if (!mvids) return dispatch(actionMusicVideos([{ strTrack: 'Not Found Videos' }]));

  return dispatch(actionMusicVideos(mvids));
};

export default fetchVideos;
