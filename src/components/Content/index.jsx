import React from 'react';
import { useSelector } from 'react-redux';
import ArtistRouters from '../../routers/ArtistRouters';
import './style.css';

const Content = () => {
  const { strArtistBanner } = useSelector((state) => state.artistDetails);
  return (
    <div className="Content">
      { strArtistBanner
      && (
      <header>
        <img src={strArtistBanner} alt="artist banner" />
      </header>
      )}
      <ArtistRouters />
    </div>
  );
};

export default Content;
