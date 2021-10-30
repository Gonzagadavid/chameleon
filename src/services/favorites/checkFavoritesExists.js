import getFavoritesArtists from './getFavoritesArtists';

const checkFavoritesExists = (artistName) => getFavoritesArtists().includes(artistName);

export default checkFavoritesExists;
