import fetchApi from '../../services/fetch/fetchApi';
import { actionError, actionLoading, actionTrackByAlbum } from '../actions';

const fetchTrackByAlbum = (id) => async (dispatch) => {
  dispatch(actionLoading);
  const { track, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/2/track.php?m=${id}`);

  if (error) return dispatch(actionError);

  return dispatch(actionTrackByAlbum(track));
};

export default fetchTrackByAlbum;
