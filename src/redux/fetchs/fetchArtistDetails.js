import fetchApi from '../../services/fetchApi';
import { actionArtistDetails, actionError } from '../actions';

const fetchArtistDetails = (name) => async (dispatch) => {
  const { artists: [artist], error } = await fetchApi(`https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`);

  if (error) return dispatch(actionError);

  return dispatch(actionArtistDetails(artist));
};

export default fetchArtistDetails;
