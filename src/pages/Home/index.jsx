import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchArtistDetails from '../../redux/fetchs/fetchArtistDetails';

const Home = () => {
  const [artist, setArtist] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async () => {
    await dispatch(fetchArtistDetails(artist));
    history.push('/artist-details');
  };

  return (
    <div>
      <h1>Music Universe</h1>
      <input placeholder="Search..." value={artist} onChange={({ target: { value } }) => setArtist(value)} />
      <button type="button" onClick={handleClick}>
        <BsSearch />
      </button>
      <p>Learn more about your favorite artist or band!</p>
    </div>
  );
};

export default Home;
