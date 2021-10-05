import {
  ALBUM, ARTIST_CURRENT, ARTIST_DETAILS, DISCOGRAPHY, ERROR, LYRIC, MUSIC_VIDEOS, TRACKSBYALBUM,
} from '../actions';

const INITIAL_STATE = {
  error: null,
  artistDetails: {},
  albums: [],
  album: null,
  trackList: [],
  artistCurrent: null,
  musicVideos: [],
  lyric: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.state };

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

    default: return state;
  }
};

export default reducer;
