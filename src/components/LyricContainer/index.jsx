import React from 'react';
import { useSelector } from 'react-redux';
import { authorTratament } from '../../functions/cleanLyric';
import './style.css';

const LyricContainer = () => {
  const lyric = useSelector((state) => state.lyric);

  return (
    <p className="lyric">{authorTratament(lyric)}</p>
  );
};

export default LyricContainer;
