import { ARTIST_STATE } from '../../constants/storage';
import getSession from '../../services/storage/getSession';
import {
  ALBUM, ARTIST_CURRENT, ARTIST_DETAILS, DISCOGRAPHY, ERROR, LYRIC,
  MUSIC_VIDEOS, TRACKSBYALBUM, MESSAGE, RESET_STATE, LOADING,
} from '../actions';

export const DEFAULT_STATE = {
  error: '',
  artistDetails: {},
  albums: [],
  album: {},
  trackList: [],
  artistCurrent: {},
  logo: '',
  musicVideos: [],
  lyric: '',
  message: '',
  loading: 0,
};

const LOCAL_STORE_STATE = getSession(ARTIST_STATE) || false;

const INITIAL_STATE = LOCAL_STORE_STATE || DEFAULT_STATE;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.state,
        message: action.state,
      };

    case ARTIST_DETAILS:
      return {
        ...state,
        artistDetails: action.state,
        logo: action.state.strArtistLogo,
        loading: state.loading - 1,
      };

    case DISCOGRAPHY:
      return { ...state, albums: action.state, loading: state.loading - 1 };

    case ALBUM:
      return { ...state, album: action.state, loading: state.loading - 1 };

    case TRACKSBYALBUM:
      return { ...state, trackList: action.state, loading: state.loading - 1 };

    case ARTIST_CURRENT:
      return { ...state, artistCurrent: action.state };

    case MUSIC_VIDEOS:
      return { ...state, musicVideos: action.state, loading: state.loading - 1 };

    case LYRIC:
      return { ...state, lyric: action.state, loading: state.loading - 1 };

    case MESSAGE:
      return { ...state, message: action.state };

    case LOADING:
      return { ...state, loading: state.loading + 1 };

    case RESET_STATE:
      return DEFAULT_STATE;

    default: return state;
  }
};

export default reducer;
