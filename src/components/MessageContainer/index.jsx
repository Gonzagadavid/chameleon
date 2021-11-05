import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiError } from 'react-icons/bi';
import { actionMessage, actionResetError } from '../../redux/actions';
import CheckComponent from '../CheckComponent';
import './style.css';

const MessageContainer = () => {
  const message = useSelector((state) => state.message);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actionMessage(''));
    dispatch(actionResetError);
  };

  // if (!message && !error) return null;

  return (
    <CheckComponent condition={message || error}>
      <div className="MessageContainer">
        <h2><BiError /></h2>
        <p>{message}</p>
        <button type="button" onClick={handleClick}>OK</button>
      </div>
    </CheckComponent>
  );
};

export default MessageContainer;
