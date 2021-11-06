import { METALLICA, BLACK_ALIEN } from './data/ARTIST_DETAILS';

const urlAtirstDetails = (artist) => `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

const fetchMock = async (url) => {
  if (url === urlAtirstDetails('metallica')) {
    return { ok: true, status: 200, json: async () => METALLICA };
  }

  if (url === urlAtirstDetails('black alien')) {
    return { ok: true, status: 200, json: async () => BLACK_ALIEN };
  }

  if (url === urlAtirstDetails('nonexistent')) return { ok: true, status: 200, json: async () => ({ artists: null }) };

  return { ok: false, status: 404 };
};

export default fetchMock;
