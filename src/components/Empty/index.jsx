import React from 'react';
import hayBall from '../../images/hayBall.gif';
import Delayed from '../Delayed';
import './style.css';

const Empty = () => (
  <Delayed>
    <div>
      <h3>Sorry, Not Found!</h3>
      <img src={hayBall} alt="hay ball" />
    </div>
  </Delayed>
);

export default Empty;
