import { string, shape } from 'prop-types';
import React from 'react';
import AlbumDetailsContainer from '../../components/AlbumDetailsContainer';
import TracksContainer from '../../components/TracksContainer';
import './style.css';

const AlbumDetails = ({ match: { params: { id } } }) => (
  <div className="AlbumDetails">
    <h2>Album Details</h2>
    <AlbumDetailsContainer id={id} />
    <TracksContainer id={id} />
  </div>
);

export default AlbumDetails;

AlbumDetails.propTypes = {
  match: shape({
    param: shape({
      id: string,
    }),
  }).isRequired,
};
