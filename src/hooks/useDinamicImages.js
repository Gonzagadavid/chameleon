import { useEffect, useState } from 'react';
import arrayImages from '../functions/arrayImages';

const useDinamicImages = (artistDetails) => {
  const { strArtistFanart } = artistDetails;
  const [image, setImage] = useState(strArtistFanart);
  const arrayImgs = arrayImages(artistDetails);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index === arrayImgs.length) { index = 0; }
      setImage(arrayImgs[index]);
      index += 1;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return [image];
};
export default useDinamicImages;
