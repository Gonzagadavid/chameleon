import fetchApi from '../../services/fetch/fetchApi';
import { actionError, actionTrackByAlbum } from '../actions';

const fetchTrackByAlbum = (id) => async (dispatch) => {
  const { track, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/track.php?m=${id}`);

  if (error) return dispatch(actionError);

  return dispatch(actionTrackByAlbum(track));
};

export default fetchTrackByAlbum;
