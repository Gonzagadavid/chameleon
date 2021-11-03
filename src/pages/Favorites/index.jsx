import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlbumsContainer from '../../components/AlbumsContainer';
import Loading from '../../components/Loading';
import TracksContainer from '../../components/TracksContainer';
import fetchDiscography from '../../redux/fetchs/fetchDiscography';
import fetchVideos from '../../redux/fetchs/fetchVideos';
import getFavoriteAlbums from '../../services/favorites/get/getFavoriteAlbums';
import getFavoriteTracks from '../../services/favorites/get/getFavoriteTracks';
import './style.css';

const Favorites = () => {
  const artistID = useSelector((state) => state.artistDetails.idArtist);
  const albums = useSelector((state) => state.albums);
  const videos = useSelector((state) => state.musicVideos);
  const dispatch = useDispatch();
  const favoriteAlbums = getFavoriteAlbums();
  const favoriteTracks = getFavoriteTracks().map((track) => ({ strTrack: track }));

  const getDiscography = useCallback(async () => {
    if (albums.length) return;
    await dispatch(fetchDiscography(artistID));

    if (videos.length) return;
    await dispatch(fetchVideos(artistID));
  }, []);

  useEffect(() => { getDiscography(); }, []);

  if (!albums.length || !videos.length) return <Loading />;

  const albumsFiltered = albums.filter(({ strAlbum }) => favoriteAlbums.includes(strAlbum));

  return (
    <div className="Favorites">
      <h2>Favorites</h2>
      <h3>Albums</h3>
      <AlbumsContainer albums={albumsFiltered} />
      <h3>Tracks</h3>
      <TracksContainer trackList={favoriteTracks} />
    </div>
  );
};

export default Favorites;
