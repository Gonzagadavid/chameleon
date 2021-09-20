import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const ContactCard = () => {
  const { strWebsite, strFacebook, strTwitter } = useSelector((state) => state.artistDetails);
  return (
    <div>
      {strWebsite && (
      <a href={strWebsite}>
        <CgWebsite />
      </a>
      )}
      {strFacebook && (
      <a href={strFacebook}>
        <AiFillFacebook />
      </a>
      )}
      {strTwitter && (
      <a href={strTwitter}>
        <AiOutlineTwitter />
      </a>
      )}
    </div>
  );
};

export default ContactCard;
