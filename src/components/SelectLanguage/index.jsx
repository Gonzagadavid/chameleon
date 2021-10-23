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
          menu: (base) => ({
            ...base,
            width: '150px',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.6)',
            padding: 20,
            position: 'absolute',
            margin: '0',
          }),

          menuList: (base) => ({
            ...base,

            '::-webkit-scrollbar': {
              width: '12px',
            },
            '::-webkit-scrollbar-track': {
              background: 'black',
            },
            '::-webkit-scrollbar-thumb': {
              background: 'white',
            },
            '::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          }),

          dropdownIndicator: (base) => ({
            ...base,
            color: 'white',
          }),

          control: (_, { selectProps: { width } }) => ({
            width,
            background: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            border: 'solid 1px white',
            height: '80%',
          }),

          option: (base) => ({
            ...base,
            ':hover': { backgroundColor: 'white', color: 'black' },
            WebkitUserSelect: { backgroundColor: 'black' },
            background: 'rgba(0, 0, 0, 0.6)',
          }),

          singleValue: (base, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return {
              ...base,
              opacity,
              transition,
              color: 'white ',
              background: 'rgba(0, 0, 0, 0.6)',
              width: '100px',
              textAlign: 'center',
            };
          },
        }}
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
