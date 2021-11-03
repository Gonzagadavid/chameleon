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
import Delayed from '../../components/Delayed';

const Track = ({ match: { params: { trackName } } }) => {
  const artist = useSelector((state) => state.artistCurrent);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const getLyric = useCallback(async () => { dispatch(fetchLyric(artist, trackName)); }, []);

  useEffect(() => { getLyric(); }, []);

  if (loading) return <Loading />;

  return (
    <div className="Track">
      <h2>
        <Favorite type={TRACKS} item={trackName} />
        {trackName}
      </h2>
      <Delayed>
        <VideoContainer trackName={trackName} />
        <LyricContainer />
      </Delayed>
    </div>
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
