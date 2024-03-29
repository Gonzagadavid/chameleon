import { cleanHeader } from '../../functions/cleanLyric';
import fetchApiText from '../../services/fetch/fetchApiText';
import { actionError, actionLoading, actionLyric } from '../actions';

const fetchLyric = (artist, title) => async (dispatch) => {
  dispatch(actionLoading);
  const { lyrics, error } = await fetchApiText(`https://api.lyrics.ovh/v1/coldplay/${title}`);

  if (error) return dispatch(actionError);

  const lyric = cleanHeader(lyrics, title, 'coldplay');

  return dispatch(actionLyric(lyric));
};

export default fetchLyric;
