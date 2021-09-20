const arrayKeys = (object, strKey) => {
  const biographyKeys = Object.keys(object).filter((key) => key.includes(strKey) && object[key]);
  const validKeys = biographyKeys.map((key) => key.replace(strKey, ''));
  return validKeys;
};

export default arrayKeys;
