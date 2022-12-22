import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SelectFavorites from '../../components/SelectFavorites';
import { ARTIST_STATE } from '../../constants/storage';
import { actionArtistCurrent, actionMessage, actionResetState } from '../../redux/actions';
import fetchArtistDetails from '../../redux/fetchs/fetchArtistDetails';
import getFavoritesArtists from '../../services/favorites/get/getFavoritesArtists';
import chameleon from '../../images/chameleon.gif';
import './style.css';
import CheckComponent from '../../components/CheckComponent';
import { SEARCH_EMPTY } from '../../constants/messages';

const Home = () => {
  const [redirect, setRedirect] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [artist, setArtist] = useState('');
  const artistDetails = useSelector((state) => state.artistDetails);
  const dispatch = useDispatch();
  const history = useHistory();
  const favorites = getFavoritesArtists();

  const getArtist = async (artistCrr) => {
    setRedirect(true);
    dispatch(actionArtistCurrent(artistCrr));
    await dispatch(fetchArtistDetails(artistCrr));
  };

  const handleClick = () => {
    if (!artist) return dispatch(actionMessage(SEARCH_EMPTY));
    return getArtist(artist);
  };

  const handleChange = (event) => {
    const { target: { value } } = event;
    setArtist(value);
  };

  useEffect(() => {
    if (Object.keys(artistDetails).length && redirect) history.push('/artist-details');
  }, [artistDetails]);

  useEffect(() => {
    sessionStorage.clear(ARTIST_STATE);
    dispatch(actionResetState);
  }, []);

  useEffect(() => {
    if (!favorite) return;
    getArtist(favorite);
  }, [favorite]);

  return (
    <div className="Home">
      <div className="image" />
      <div className="opacity">
        <div className="title">
          <h1>
            Chameleon
            <img src={chameleon} alt="chameleon" className="gif" />
          </h1>
        </div>
        <input
          placeholder="Search..."
          value={artist}
          onInput={handleChange}
          onKeyPress={({ code }) => code === 'Enter' && handleClick()}
        />
        <button type="button" onClick={handleClick}>
          <BsSearch />
        </button>
        <CheckComponent CheckComponent condition={favorites.length}>
          <SelectFavorites setFavorite={setFavorite} />
        </CheckComponent>
        <p>Learn more about your favorite singer or band!</p>
        <p>Limited to Coldplay =( (because of the API)</p>
      </div>
    </div>
  );
};

export default Home;
