import React from 'react';
import InfoCard from '../../components/InfoCard';
import InfoImage from '../../components/InfoImage';
import './style.css';

const ArtistDetails = () => (
  <div className="ArtistDetails">
    <div className="detailsContainer">
      <InfoCard />
      <InfoImage />
    </div>
  </div>
);

export default ArtistDetails;
