import React, { useEffect, useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';
import { string } from 'prop-types';
import favoriteState from '../../services/favorites/favoriteState';
import favoriteAdm from '../../services/favorites/favoriteAdm';

const Favorite = ({ item }) => {
  const [favorite, setFavorite] = useState(false);
  const artistCurrent = useSelector((state) => state.artistCurrent);
  const history = useHistory();
  const pathName = history.location.pathname;

  useEffect(() => {
    const checkState = favoriteState(artistCurrent, pathName, item);
    setFavorite(checkState);
  }, []);

  const handleFavorite = () => {
    setFavorite(!favorite);
    favoriteAdm(artistCurrent, pathName, item);
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
};

Favorite.defaultProps = {
  item: 'undefined',
};
