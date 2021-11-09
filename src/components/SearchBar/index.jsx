import { func, string } from 'prop-types';
import React from 'react';
import './style.css';

const SearchBar = ({ setFiltered, objectKey }) => (
  <div className="SearchBar">
    <input onInput={({ target: { value } }) => setFiltered(value, objectKey)} placeholder="Search..." />
  </div>
);
export default SearchBar;

SearchBar.propTypes = {
  setFiltered: func.isRequired,
  objectKey: string.isRequired,
};
