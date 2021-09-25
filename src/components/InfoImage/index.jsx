import React from 'react';
import { useSelector } from 'react-redux';
import notFoundImage from '../../images/notFoundImage.png';
import './style.css';

const InfoImage = () => {
  const artistDetails = useSelector((state) => state.artistDetails);
  const { strArtistFanart, strArtistWideThumb } = artistDetails;
  const image = strArtistWideThumb || strArtistFanart;
  return (
    <div className="InfoImage">
      <img src={image || notFoundImage} alt="artists" />
    </div>
  );
};
export default InfoImage;
