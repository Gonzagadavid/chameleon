import { string } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchLyric from '../../redux/fetchs/fetchLyric';
import Loading from '../Loading';
import './style.css';

const LyricContainer = ({ trackName }) => {
  const artist = useSelector((state) => state.artistCurrent);
  const lyric = useSelector((state) => state.lyric);
  const dispatch = useDispatch();

  const getLyric = useCallback(async () => { dispatch(fetchLyric(artist, trackName)); }, []);
  useEffect(() => { getLyric(); }, []);

  if (!lyric) return <Loading />;

  return (
    <p className="lyric">{lyric.replace(/\[/g, '(').replace(/\]/g, ')')}</p>
  );
};

export default LyricContainer;

LyricContainer.propTypes = {
  trackName: string.isRequired,
};
