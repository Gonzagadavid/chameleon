import { ARTIST_NOT_FOUND } from '../../constants/messages';
import fetchApi from '../../services/fetch/fetchApi';
import {
  actionArtistDetails, actionError, actionLoading, actionMessage,
} from '../actions';

const fetchArtistDetails = (name) => async (dispatch) => {
  dispatch(actionLoading);
  const { artists, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`);

  if (error) return dispatch(actionError);
  if (!artists) return dispatch(actionMessage(ARTIST_NOT_FOUND));

  return dispatch(actionArtistDetails(artists[0]));
};

export default fetchArtistDetails;
