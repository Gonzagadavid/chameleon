import { node, number } from 'prop-types';
import { useState, useEffect } from 'react';

const Delayed = ({ children, waitBeforeShow }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(time);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

export default Delayed;

Delayed.propTypes = {
  children: node.isRequired,
  waitBeforeShow: number,
};

Delayed.defaultProps = {
  waitBeforeShow: 500,
};
