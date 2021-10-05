const initialUpperCase = (string) => {
  const arrStr = string.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);
  return arrStr.join(' ');
};

export default initialUpperCase;
