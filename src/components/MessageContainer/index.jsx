import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiError } from 'react-icons/bi';
import { actionMessage } from '../../redux/actions';
import './style.css';

const MessageContainer = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleClick = () => { dispatch(actionMessage('')); };

  if (!message) return null;

  return (
    <div className="MessageContainer">
      <h2><BiError /></h2>
      <p>{message}</p>
      <button type="button" onClick={handleClick}>OK</button>
    </div>
  );
};

export default MessageContainer;
