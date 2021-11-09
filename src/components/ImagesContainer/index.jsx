import React from 'react';
import { useSelector } from 'react-redux';
import useDinamicImages from '../../hooks/useDinamicImages';

import './styles.css';

const ImagesContainer = () => {
  const artistDetails = useSelector((state) => state.artistDetails);
  const [image] = useDinamicImages(artistDetails);

  return (
    <div className="ImagesContainer">
      <img src={image} alt="artists" />
    </div>
  );
};

export default ImagesContainer;
