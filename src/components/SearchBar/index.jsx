import { func, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import './style.css';

const SearchBar = ({ setFiltered, objectKey }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFiltered(search, objectKey);
  }, [search]);

  return (
    <div>
      <input value={search} onInput={({ target: { value } }) => setSearch(value)} placeholder="Search By Title..." />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  setFiltered: func.isRequired,
  objectKey: string.isRequired,
};