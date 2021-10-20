import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionMessage } from '../../redux/actions';
import './style.css';

const MessageContainer = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleClick = () => { dispatch(actionMessage('')); };

  if (!message) return '';

  return (
    <div className="MessageContainer">
      <p>{message}</p>
      <button type="button" onClick={handleClick}>OK</button>
    </div>
  );
};

export default MessageContainer;
