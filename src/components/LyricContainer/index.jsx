import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const LyricContainer = () => {
  const lyric = useSelector((state) => state.lyric);

  return (
    <p className="lyric">{lyric.replace(/\[/g, '(').replace(/\]/g, ')')}</p>
  );
};

export default LyricContainer;
