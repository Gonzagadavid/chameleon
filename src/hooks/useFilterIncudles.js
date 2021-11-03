import { useEffect, useState } from 'react';

const useFilterIncludes = (arrayInit) => {
  const [array, setArray] = useState(arrayInit);
  const filter = (string, key) => {
    const filteredArray = arrayInit
      .filter((object) => object[key].toLowerCase().includes(string.toLowerCase()));
    setArray(filteredArray);
  };

  useEffect(() => {
    setArray(arrayInit);
  }, [arrayInit]);

  return [array, filter];
};

export default useFilterIncludes;
