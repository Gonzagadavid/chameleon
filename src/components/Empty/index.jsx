import { bool, node } from 'prop-types';
import React from 'react';
import hayBall from '../../images/hayBall.gif';
import Delayed from '../Delayed';
import './style.css';

const Empty = ({ children, condition }) => {
  if (condition) return children;

  return (
    <Delayed>
      <div className="Empty">
        <h3>Empty!</h3>
        <img src={hayBall} alt="hay ball" />
      </div>
    </Delayed>
  );
};
export default Empty;

Empty.propTypes = {
  children: node.isRequired,
  condition: bool.isRequired,
};
