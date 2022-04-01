import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const LogoArtist = () => {
  const { strArtistLogo, strArtist } = useSelector((state) => state.artistDetails);

  return (
    <div className="LogoArtist">
      {
        strArtistLogo
          ? <img src={strArtistLogo} alt={`logo of ${strArtist}`} />
          : <h2>{strArtist}</h2>
      }
    </div>
  );
};

export default LogoArtist;
