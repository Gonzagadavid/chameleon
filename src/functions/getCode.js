const getCode = (tag) => {
  if (tag === 'PT') return 'BR';
  return tag === 'EN' ? 'US' : tag;
};

export default getCode;
