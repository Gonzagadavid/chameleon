export const ERROR = 'ERROR';

export const ARTIST_DETAILS = 'ARTIST_DETAILS';

export const actionError = { type: ERROR, state: 'Ocorreu um erro na aplicação, tente novamente mais tarde!' };

export const actionArtistDetails = (state) => ({ type: ARTIST_DETAILS, state });
