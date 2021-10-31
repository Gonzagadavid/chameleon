import getFavoritesArtists from '../add/get/getFavoritesArtists';

const checkFavoritesExists = (artistName) => getFavoritesArtists().includes(artistName);

export default checkFavoritesExists;
