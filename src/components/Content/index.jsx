import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ArtistRouters from '../../routers/ArtistRouters';
import setSession from '../../services/storage/setSession';
import './style.css';

const Content = () => {
  const { strArtistBanner } = useSelector((state) => state.artistDetails);
  const stateRedux = useSelector((state) => state);
  const location = useLocation();
  const path = location.pathname !== '/artist-details/biography';

  useEffect(() => {
    setSession('artist_state', stateRedux);
  }, []);

  return (
    <div className="Content">
      { strArtistBanner
      && path && (
      <header>
        <img src={strArtistBanner} alt="artist banner" />
      </header>
      )}
      <ArtistRouters />
    </div>
  );
};

export default Content;
