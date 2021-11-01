import React from 'react';
import { useSelector } from 'react-redux';
import detailKeys from '../../constants/data';
import { ARTIST } from '../../constants/types';
import Favorite from '../Favorite';
import './style.css';

const InfoCard = () => {
  const artistDetails = useSelector((state) => state.artistDetails);
  return (
    <div className="infoCard">
      <Favorite type={ARTIST} />
      {detailKeys.map(({ key, value }) => (
        <p key={key}>
          {key}
          :
          {' '}
          <span>{artistDetails[value]}</span>
        </p>
      ))}
    </div>
  );
};

export default InfoCard;
