import {
  func, objectOf, string,
} from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { selectLanguages } from '../../constants/selectStyles';
import arrayKeys from '../../functions/arrayKeys';
import getCode from '../../functions/getCode';
import './style.css';

const SelectLanguage = ({ setLanguage, objectItems, keyOption }) => {
  const options = arrayKeys(objectItems, keyOption)
    .map((tag) => ({ value: tag, label: tag, code: getCode(tag) }));
  return (
    <div className="SelectLanguage">
      <Select
        defaultValue={options[0]}
        styles={selectLanguages}
        width="180px"
        options={options}
        onChange={({ value }) => setLanguage(value)}
        getOptionLabel={(e) => (
          <div>
            <span style={{ marginRight: 10 }}>{e.label}</span>
            <img src={`https://flagcdn.com/${e.code.toLowerCase()}.svg`} alt="flag" width="20px" />
          </div>
        )}
      />
    </div>
  );
};

export default SelectLanguage;

SelectLanguage.propTypes = {
  setLanguage: func.isRequired,
  objectItems: objectOf(string).isRequired,
  keyOption: string.isRequired,
};
