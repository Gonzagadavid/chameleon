import { string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const BiographyContainer = ({ language }) => {
  const artistDetails = useSelector((state) => state.artistDetails);
  return (
    <div>
      <p>
        {artistDetails[`strBiography${language}`]}
      </p>
    </div>
  );
};

export default BiographyContainer;

BiographyContainer.propTypes = {
  language: string.isRequired,
};
