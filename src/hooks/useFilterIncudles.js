import { useEffect, useState } from 'react';
import filterIncludes from '../functions/filterIncludes';

const useFilterIncludes = (arrayInit) => {
  const [array, setArray] = useState(arrayInit);
  const filter = (string, key) => {
    const filteredArray = filterIncludes(arrayInit, key, string);
    setArray(filteredArray);
  };

  useEffect(() => {
    setArray(arrayInit);
  }, [arrayInit]);

  return [array, filter];
};

export default useFilterIncludes;
