import React from 'react';
import hayBall from '../../images/hayBall.gif';
import './style.css';

const Empty = () => (
  <div>
    <h3>Sorry, Not Found!</h3>
    <img src={hayBall} alt="hay ball" />
  </div>
);

export default Empty;
