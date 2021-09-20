import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { strArtistLogo, strArtist } = useSelector((state) => state.artistDetails);

  return (
    <div style={{ backgroundColor: 'black' }}>
      {
        strArtistLogo
          ? <img src={strArtistLogo} alt={`logo of ${`${strArtist}`}`} />
          : <h2>{strArtist}</h2>
      }
    </div>
  );
};

export default Header;
