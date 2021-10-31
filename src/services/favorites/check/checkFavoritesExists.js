import getFavoritesArtists from '../get/getFavoritesArtists';

const checkFavoritesExists = (artistName) => getFavoritesArtists().includes(artistName);

export default checkFavoritesExists;
