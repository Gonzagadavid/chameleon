import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './style.css';

const ContactCard = () => {
  const { strWebsite, strFacebook, strTwitter } = useSelector((state) => state.artistDetails);
  return (
    <div className="ContactCard">
      {strWebsite && (
      <a href={`https://${strWebsite}`} target="_blank" rel="noreferrer">
        <CgWebsite />
      </a>
      )}
      {strFacebook && (
      <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      )}
      {strTwitter && (
      <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer">
        <AiOutlineTwitter />
      </a>
      )}
    </div>
  );
};

export default ContactCard;
