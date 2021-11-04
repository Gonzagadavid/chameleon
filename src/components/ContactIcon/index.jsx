import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { string } from 'prop-types';

const ContacIcon = ({ contact }) => {
  const contacts = {
    CgWebsite: <CgWebsite />,
    FaFacebook: <FaFacebook />,
    AiOutlineTwitter: <AiOutlineTwitter />,
  };

  return contacts[contact];
};

export default ContacIcon;

ContacIcon.propTypes = {
  contact: string.isRequired,
};
