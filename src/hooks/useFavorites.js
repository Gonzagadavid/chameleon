import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fetchDiscography from '../redux/fetchs/fetchDiscography';
import getFavoriteAlbums from '../services/favorites/get/getFavoriteAlbums';
import getFavoriteTracks from '../services/favorites/get/getFavoriteTracks';
import useFetchReturnState from './useFetchReturnState';

const useFavorites = () => {
  const [albumsFiltered, setAlbumsFiltered] = useState([]);
  const artistId = useSelector((state) => state.artistDetails.idArtist);
  const [albums] = useFetchReturnState(fetchDiscography, artistId, 'albums');
  const favoriteAlbums = getFavoriteAlbums();
  const favoriteTracks = getFavoriteTracks();
  useEffect(() => {
    if (!albums.length) return;
    const filtered = albums.filter(({ strAlbum }) => favoriteAlbums.includes(strAlbum));
    setAlbumsFiltered(filtered);
  }, [albums]);

  return [albumsFiltered, favoriteTracks];
};
export default useFavorites;
