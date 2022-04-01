import arrayKeys from './arrayKeys';

const arrayImages = (object) => {
  const validKeys = arrayKeys(object, 'strArtistFanart');
  const imagesKeys = validKeys.map((keyNumber) => `strArtistFanart${keyNumber}`);
  return imagesKeys.map((key) => object[key]).filter((src) => src);
};

export default arrayImages;
