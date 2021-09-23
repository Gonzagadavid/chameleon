import { string, shape } from 'prop-types';
import React from 'react';
import AlbumDetailsContainer from '../../components/AlbumDetailsContainer';
import './style.css';

const AlbumDetails = ({ match: { params: { id } } }) => (
  <div>
    <h2>Album Details</h2>
    <AlbumDetailsContainer id={id} />
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
