import {
  ALBUM, ARTIST_DETAILS, DISCOGRAPHY, ERROR,
} from '../actions';

const INITIAL_STATE = {
  error: null,
  artistDetails: {},
  albums: [],
  album: null,
  trackList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.state };

    case ARTIST_DETAILS:
      return { ...state, artistDetails: action.state, error: null };

    case DISCOGRAPHY:
      return { ...state, albums: action.state, error: null };

    case ALBUM:
      return { ...state, album: action.state, error: null };

    default: return state;
  }
};

export default reducer;
