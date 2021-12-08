import { func } from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { placeholderStyle, selectFavorites } from '../../constants/selectStyles';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import getFavorites from '../../services/favorites/get/getFavorites';
import getFavoritesArtists from '../../services/favorites/get/getFavoritesArtists';
import './style.css';

const SelectFavorites = ({ setFavorite }) => {
  const favorites = getFavorites();
  const favoritesArtists = getFavoritesArtists();
  const [widthScreen] = useWindowDimensions();

  const options = favoritesArtists
    .map((item) => ({ value: item, label: item, code: favorites[item].logo }));
  return (
    <div className="SelectFavorites">
      <Select
        placeholder={(<div style={placeholderStyle}> Favorites</div>)}
        styles={selectFavorites}
        width={(widthScreen) < 470 ? '200px' : '300px'}
        options={options}
        isSearchable={false}
        onChange={({ value }) => setFavorite(value)}
        getOptionLabel={(e) => (
          <div>
            {
             e.code
               ? <img src={e.code} alt="flag" width="100%" />
               : <span style={{ marginRight: 10 }}>{e.label}</span>
          }
          </div>
        )}
      />
    </div>
  );
};

export default SelectFavorites;

SelectFavorites.propTypes = {
  setFavorite: func.isRequired,
};
