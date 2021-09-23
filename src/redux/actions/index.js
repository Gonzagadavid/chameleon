export const ERROR = 'ERROR';

export const ARTIST_DETAILS = 'ARTIST_DETAILS';

export const DISCOGRAPHY = 'DISCOGRAPHY';

export const ALBUM = 'ALBUM';

export const actionError = { type: ERROR, state: 'Ocorreu um erro na aplicação, tente novamente mais tarde!' };

export const actionArtistDetails = (state) => ({ type: ARTIST_DETAILS, state });

export const actionDiscography = (state) => ({ type: DISCOGRAPHY, state });

export const actionAlbum = (state) => ({ type: ALBUM, state });
