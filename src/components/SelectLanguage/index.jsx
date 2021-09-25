import {
  func, objectOf, string,
} from 'prop-types';
import React from 'react';
import arrayKeys from '../../functions/arrayKeys';

const SelectLanguage = ({ setLanguage, objectItems, keyOption }) => {
  const options = arrayKeys(objectItems, keyOption);
  return (
    <div>
      <select onChange={({ target: { value } }) => setLanguage(value)}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
};

export default SelectLanguage;

SelectLanguage.propTypes = {
  setLanguage: func.isRequired,
  objectItems: objectOf(string).isRequired,
  keyOption: string.isRequired,
};
