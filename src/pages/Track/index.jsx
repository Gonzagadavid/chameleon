import { shape, string } from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LyricContainer from '../../components/LyricContainer';
import VideoContainer from '../../components/VIdeoContainer';
import { TRACKS } from '../../constants/types';
import fetchLyric from '../../redux/fetchs/fetchLyric';
import Favorite from '../../components/Favorite';
import './style.css';
import Loading from '../../components/Loading';

const Track = ({ match: { params: { trackName } } }) => {
  const artist = useSelector((state) => state.artistCurrent);
  const dispatch = useDispatch();
  const getLyric = useCallback(async () => { dispatch(fetchLyric(artist, trackName)); }, []);

  useEffect(() => { getLyric(); }, []);

  return (
    <Loading className="Track">
      <h2>
        <Favorite type={TRACKS} item={trackName} />
        {trackName}
      </h2>
      <VideoContainer trackName={trackName} />
      <LyricContainer />
    </Loading>
  );
};

export default Track;

Track.propTypes = {
  match: shape({
    param: shape({
      trackName: string,
    }),
  }).isRequired,
};
