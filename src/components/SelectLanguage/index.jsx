import {
  func, objectOf, string,
} from 'prop-types';
import React from 'react';
import Select from 'react-select';
import arrayKeys from '../../functions/arrayKeys';
import './style.css';

const SelectLanguage = ({ setLanguage, objectItems, keyOption }) => {
  const options = arrayKeys(objectItems, keyOption)
    .map((tag) => ({ value: tag, label: tag, code: tag === 'PT' ? 'BR' : tag === 'EN' ? 'US' : tag }));

  return (
    <div className="SelectLanguage">
      <Select
        defaultValue={options[0]}
        styles={{
          menu: (provided) => ({
            ...provided,
            width: '200px',
            // borderBottom: '1px dotted pink',
            color: 'white',
            backgroundColor: 'black',
            padding: 20,
            position: 'absolute',
            margin: '0',
          }),
          control: (_, { selectProps: { width } }) => ({
            width,
            backgroundColor: 'blue',
            display: 'flex',
          }),

          singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return {
              ...provided,
              opacity,
              transition,
              color: 'pink',
              backgroundColor: 'black',
              width: '150px',
              textAlign: 'center',
            };
          },
        }}
        width="200px"
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
