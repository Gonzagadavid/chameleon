const arraySortNum = (array, key) => (
  [...array].sort((a, b) => +a[key] - +b[key])
);

export default arraySortNum;
