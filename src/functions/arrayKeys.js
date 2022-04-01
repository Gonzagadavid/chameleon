const arrayKeys = (object, strKey) => {
  const biographyKeys = Object.keys(object).filter((key) => key.includes(strKey) && object[key]);
  return biographyKeys.map((key) => key.replace(strKey, ''));
};

export default arrayKeys;
