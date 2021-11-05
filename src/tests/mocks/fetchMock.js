import ARTIST_DETAILS from './data/ARTIST_DETAILS';

const urlAtirstDetails = 'https://theaudiodb.com/api/v1/json/1/search.php?s=metallica';
const urlNotFound = 'https://theaudiodb.com/api/v1/json/1/search.php?s=nonexistent';

const fetchMock = async (url) => {
  if (url === urlAtirstDetails) return { ok: true, status: 200, json: async () => ARTIST_DETAILS };
  if (url === urlNotFound) return { ok: true, status: 200, json: async () => ({ artists: null }) };

  return { ok: false, status: 404 };
};

export default fetchMock;
