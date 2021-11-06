import { METALLICA, BLACK_ALIEN } from './data/ARTIST_DETAILS';
import METALLICA_DISCOGRAPHY from './data/DISCOGRAPHY';
import METALLICA_VIDEOS from './data/VIDEOS';

const urlAtirstDetails = (artist) => `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

const urlDiscography = (idArtist) => `https://theaudiodb.com/api/v1/json/1/album.php?i=${idArtist}`;

const urlVideos = (idArtist) => `https://theaudiodb.com/api/v1/json/1/mvid.php?i=${idArtist}`;

const fetchMock = async (url) => {
  if (url === urlAtirstDetails('metallica')) {
    return { ok: true, status: 200, json: async () => METALLICA };
  }

  if (url === urlAtirstDetails('black alien')) {
    return { ok: true, status: 200, json: async () => BLACK_ALIEN };
  }

  if (url === urlAtirstDetails('nonexistent')) return { ok: true, status: 200, json: async () => ({ artists: null }) };

  if (url === urlDiscography(111279)) {
    return { ok: true, status: 200, json: async () => METALLICA_DISCOGRAPHY };
  }

  if (url === urlVideos(111279)) {
    return { ok: true, status: 200, json: async () => METALLICA_VIDEOS };
  }

  return { ok: false, status: 404 };
};

export default fetchMock;
