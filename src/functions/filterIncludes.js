const filterIncludes = (array, key, string) => (
  array.filter((object) => object[key].toLowerCase().includes(string.toLowerCase()))
);

export default filterIncludes;
