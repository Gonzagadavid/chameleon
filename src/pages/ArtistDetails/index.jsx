import React from 'react';
import { useSelector } from 'react-redux';
import InfoCard from '../../components/InfoCard';
import InfoImage from '../../components/InfoImage';
import Loading from '../../components/Loading';
import './style.css';

const ArtistDetails = () => {
  const loading = useSelector((state) => state.loading);

  return (
    <div className="ArtistDetails">
      {
        loading ? <Loading />
          : (
            <div className="detailsContainer">
              <InfoCard />
              <InfoImage />
            </div>
          )
      }
    </div>
  );
};

export default ArtistDetails;
