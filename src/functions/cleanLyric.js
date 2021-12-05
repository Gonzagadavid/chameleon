import initialUpperCase from './initialUpperCase';

export const cleanHeader = (lyrics, title, artist) => lyrics.replace(`Paroles de la chanson ${initialUpperCase(title)} par ${initialUpperCase(artist)}`, '');

export const authorTratament = (lyrics) => lyrics.replace(/[[{]/g, '(').replace(/[\]}]/g, ')');
