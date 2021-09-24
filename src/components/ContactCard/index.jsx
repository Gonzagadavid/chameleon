import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const ContactCard = () => {
  const { strWebsite, strFacebook, strTwitter } = useSelector((state) => state.artistDetails);
  return (
    <div>
      {strWebsite && (
      <a href={`https://${strWebsite}`} target="_blank" rel="noreferrer">
        <CgWebsite />
      </a>
      )}
      {strFacebook && (
      <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer">
        <AiFillFacebook />
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
