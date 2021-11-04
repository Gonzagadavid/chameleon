import React from 'react';
// import { useSelector } from 'react-redux';
import InfoCard from '../../components/InfoCard';
import InfoImage from '../../components/InfoImage';
import Loading from '../../components/Loading';
import './style.css';

const ArtistDetails = () => (
  <Loading className="ArtistDetails">
    <div className="detailsContainer">
      <InfoCard />
      <InfoImage />
    </div>
  </Loading>
);
export default ArtistDetails;
