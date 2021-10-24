import fetchApi from '../../services/fetch/fetchApi';
import { actionAlbum, actionError, actionLoading } from '../actions';

const fetchAlbum = (id) => async (dispatch) => {
  dispatch(actionLoading);
  const { album, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/album.php?m=${id}`);

  if (error) return dispatch(actionError);

  return dispatch(actionAlbum(album[0]));
};

export default fetchAlbum;
