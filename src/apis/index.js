export const TYPE_ARTIST_DETAILS = 'ARTIST_DETAILS';

export const ARTIST_DETAILS = (name) => ({
  endPoint: `https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`,
  type: TYPE_ARTIST_DETAILS,
});
