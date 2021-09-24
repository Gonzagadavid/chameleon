import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import arrayImages from '../../functions/arrayImages';
import './styles.css';

const ImagesContainer = () => {
  const artistDetails = useSelector((state) => state.artistDetails);
  const { strArtistFanart } = artistDetails;
  const [image, setImage] = useState(strArtistFanart);
  const arrayImgs = arrayImages(artistDetails);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index === arrayImgs.length) { index = 0; }
      setImage(arrayImgs[index]);
      index += 1;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ImagesContainer">
      <img src={image} alt="artists" />
    </div>
  );
};

export default ImagesContainer;
