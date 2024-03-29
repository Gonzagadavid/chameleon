import { ARTIST_NOT_FOUND } from '../../constants/messages';
import fetchApi from '../../services/fetch/fetchApi';
import {
  actionArtistDetails, actionError, actionLoading, actionMessage,
} from '../actions';

const fetchArtistDetails = () => async (dispatch) => {
  dispatch(actionLoading);
  const { artists, error } = await fetchApi('https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay');

  if (error) return dispatch(actionError);
  if (!artists) return dispatch(actionMessage(ARTIST_NOT_FOUND));

  return dispatch(actionArtistDetails(artists[0]));
};

export default fetchArtistDetails;
