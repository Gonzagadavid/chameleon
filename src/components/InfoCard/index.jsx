import React from 'react';
import { useSelector } from 'react-redux';
import detailKeys from '../../constants';

const InfoCard = () => {
  const artistDetails = useSelector((state) => state.artistDetails);
  return (
    <div>
      {detailKeys.map(({ key, value }) => (
        <p key={key}>
          {key}
          :
          <span>{artistDetails[value]}</span>
        </p>
      ))}
    </div>
  );
};

export default InfoCard;
