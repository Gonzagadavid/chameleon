import fetchApi from '../../services/fetchApi';
import { actionArtistDetails, actionError, actionMessage } from '../actions';

const fetchArtistDetails = (name) => async (dispatch) => {
  const { artists, error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`);

  if (error) return dispatch(actionError);
  if (!artists) return dispatch(actionMessage('The name entered was not found in our database, check the name or choose another one'));

  return dispatch(actionArtistDetails(artists[0]));
};

export default fetchArtistDetails;
