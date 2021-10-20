import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionArtistCurrent } from '../../redux/actions';
import fetchArtistDetails from '../../redux/fetchs/fetchArtistDetails';
import './style.css';

const Home = () => {
  const [artist, setArtist] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async () => {
    dispatch(actionArtistCurrent(artist));
    await dispatch(fetchArtistDetails(artist));
    history.push('/artist-details');
  };

  return (
    <div className="Home">
      <div className="opacity">
        <h1>
          <span>N</span>
          Music Universe
          <span>N</span>
        </h1>
        <input placeholder="Search..." value={artist} onChange={({ target: { value } }) => setArtist(value)} />
        <button type="button" onClick={handleClick}>
          <BsSearch />
        </button>
        <p>Learn more about your favorite artist or band!</p>
      </div>
    </div>
  );
};

export default Home;
