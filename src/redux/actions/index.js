export const ERROR = 'ERROR';

export const ARTIST_DETAILS = 'ARTIST_DETAILS';

export const DISCOGRAPHY = 'DISCOGRAPHY';

export const ALBUM = 'ALBUM';

export const TRACKSBYALBUM = 'TRACKSBYALBUM';

export const ARTIST_CURRENT = 'ARTIST_CURRENT';

export const MUSIC_VIDEOS = 'MUSIC_VIDEOS';

export const LYRIC = 'LYRIC';

export const MESSAGE = 'MESSAGE';

export const RESET_STATE = 'RESET_STATE';

export const actionError = { type: ERROR, state: 'Ocorreu um erro na aplicação, tente novamente mais tarde!' };

export const actionArtistDetails = (state) => ({ type: ARTIST_DETAILS, state });

export const actionDiscography = (state) => ({ type: DISCOGRAPHY, state });

export const actionAlbum = (state) => ({ type: ALBUM, state });

export const actionTrackByAlbum = (state) => ({ type: TRACKSBYALBUM, state });

export const actionArtistCurrent = (state) => ({ type: ARTIST_CURRENT, state });

export const actionMusicVideos = (state) => ({ type: MUSIC_VIDEOS, state });

export const actionLyric = (state) => ({ type: LYRIC, state });

export const actionMessage = (state) => ({ type: MESSAGE, state });

export const actionResetState = { type: RESET_STATE };
