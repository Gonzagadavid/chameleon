import React, { useEffect, useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './style.css';
import { string } from 'prop-types';
import favoriteState from '../../services/favorites/check/favoriteState';
import favoriteAdm from '../../services/favorites/favoriteAdm';

const Favorite = ({ item, type }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const checkState = favoriteState(type, item);
    setFavorite(checkState);
  }, []);

  const handleFavorite = () => {
    setFavorite(!favorite);
    favoriteAdm(type, item);
  };

  return (
    <button type="button" className="Favorite" title="Favorite" onClick={handleFavorite}>
      {favorite ? <AiFillStar /> : <AiOutlineStar />}
    </button>
  );
};

export default Favorite;

Favorite.propTypes = {
  item: string,
  type: string.isRequired,
};

Favorite.defaultProps = {
  item: 'undefined',
};
