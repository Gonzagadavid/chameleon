import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ArtistRouters from '../../routers/ArtistRouters';
import './style.css';

const Content = () => {
  const { strArtistBanner } = useSelector((state) => state.artistDetails);
  const stateRedux = useSelector((state) => state);

  useEffect(() => {
    sessionStorage.setItem('artist_state', JSON.stringify(stateRedux));
  }, []);

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
