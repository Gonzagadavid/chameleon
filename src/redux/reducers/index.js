import { ARTIST_DETAILS, ERROR } from '../actions';

const INITIAL_STATE = {
  error: null,
  artistDetails: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR: return { ...state, error: action.state };

    case ARTIST_DETAILS: return { ...state, artistDetails: action.state };

    default: return state;
  }
};

export default reducer;
