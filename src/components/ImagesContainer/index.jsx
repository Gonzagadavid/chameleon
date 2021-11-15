import React from 'react';
import { useSelector } from 'react-redux';
import useDinamicImages from '../../hooks/useDinamicImages';
import CheckComponent from '../CheckComponent';

import './styles.css';

const ImagesContainer = () => {
  const artistDetails = useSelector((state) => state.artistDetails);
  const { strArtist } = artistDetails;
  const [image] = useDinamicImages(artistDetails);

  return (
    <CheckComponent condition={image}>
      <div className="ImagesContainer">
        <img src={image} alt={strArtist} />
      </div>
    </CheckComponent>
  );
};

export default ImagesContainer;
