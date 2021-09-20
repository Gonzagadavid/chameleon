import React from 'react';
import { useSelector } from 'react-redux';
import ArtistRouters from '../../routers/ArtistRouters';
import './style.css';

const Main = () => {
  const { strArtistBanner } = useSelector((state) => state.artistDetails);
  return (
    <div className="Main">
      <header>
        {strArtistBanner && <img src={strArtistBanner} alt="artist banner" />}
      </header>
      <ArtistRouters />
    </div>
  );
};

export default Main;
