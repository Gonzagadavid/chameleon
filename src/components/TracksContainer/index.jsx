import { string } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const TracksContainer = ({ id }) => {
  const trackList = useSelector((state) => state.trackList);
  return (
    <h1>TracksContainer</h1>
  );
};

export default TracksContainer;

TracksContainer.propTypes = {
  id: string.isRequired,
};
