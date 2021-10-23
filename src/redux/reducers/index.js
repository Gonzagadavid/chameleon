import getSession from '../../services/storage/getSession';
import {
  ALBUM, ARTIST_CURRENT, ARTIST_DETAILS, DISCOGRAPHY, ERROR, LYRIC,
  MUSIC_VIDEOS, TRACKSBYALBUM, MESSAGE, RESET_STATE,
} from '../actions';

export const DEFAULT_STATE = {
  error: null,
  artistDetails: {},
  albums: [],
  album: null,
  trackList: [],
  artistCurrent: null,
  musicVideos: [],
  lyric: '',
  message: '',
};

const LOCAL_STORE_STATE = getSession('artist_state') || false;

const INITIAL_STATE = LOCAL_STORE_STATE || DEFAULT_STATE;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.state, message: action.state };

    case ARTIST_DETAILS:
      return { ...state, artistDetails: action.state };

    case DISCOGRAPHY:
      return { ...state, albums: action.state };

    case ALBUM:
      return { ...state, album: action.state };

    case TRACKSBYALBUM:
      return { ...state, trackList: action.state };

    case ARTIST_CURRENT:
      return { ...state, artistCurrent: action.state };

    case MUSIC_VIDEOS:
      return { ...state, musicVideos: action.state };

    case LYRIC:
      return { ...state, lyric: action.state };

    case MESSAGE:
      return { ...state, message: action.state };

    case RESET_STATE:
      return DEFAULT_STATE;

    default: return state;
  }
};

export default reducer;
