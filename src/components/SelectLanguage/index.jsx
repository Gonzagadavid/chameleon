import {
  func, objectOf, string,
} from 'prop-types';
import React from 'react';
import ArrayOptions from '../../functions/ArrayOptions';

const SelectLanguage = ({ setLanguage, objectItems }) => {
  const options = ArrayOptions(objectItems);
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
};
