import {
  ARTIST_DETAILS, BIOGRAPHY, DISCOGRAPHY, FAVORITES, VIDEOS,
} from './routes';

const nav = [
  { route: ARTIST_DETAILS, label: 'Details' },
  { route: BIOGRAPHY, label: 'Biograph' },
  { route: DISCOGRAPHY, label: 'Discograph' },
  { route: VIDEOS, label: 'Videos Music' },
  { route: FAVORITES, label: 'Favorites' },
  { route: '/', label: 'Back' },
];

export default nav;
