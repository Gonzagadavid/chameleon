const ArrayOptions = (object) => {
  const biographyKeys = Object.keys(object).filter((key) => /strBiography/g.test(key) && object[key]);
  const options = biographyKeys.map((key) => key.replace('strBiography', ''));
  return options;
};

export default ArrayOptions;
