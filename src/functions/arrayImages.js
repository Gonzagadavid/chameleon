import arrayKeys from './arrayKeys';

const arrayImages = (object) => {
  const validKeys = arrayKeys(object, 'strArtistFanart');
  const imagesKeys = validKeys.map((keyNumber) => `strArtistFanart${keyNumber}`);
  const validImages = [
    ...imagesKeys.map((key) => object[key]),
    object.strArtistClearart,
    object.strArtistWideThumb,
  ].filter((src) => src);
  return validImages;
};

export default arrayImages;
