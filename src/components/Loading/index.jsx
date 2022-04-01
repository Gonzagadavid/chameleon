import { node, string } from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import vinil from '../../images/vinil.gif';
import Delayed from '../Delayed';

const Loading = ({ children, className }) => {
  const loading = useSelector((state) => state.loading);
  const [isLoading] = useState(loading);

  if (loading) return <img src={vinil} alt="loading" />;

  return (
    <Delayed waitBeforeShow={isLoading ? 500 : 10}>
      <div className={className}>
        {children}
      </div>
    </Delayed>
  );
};

export default Loading;

Loading.propTypes = {
  children: node.isRequired,
  className: string.isRequired,
};
