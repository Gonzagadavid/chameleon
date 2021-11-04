import React from 'react';
import { v4 as uiidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import './style.css';
import CheckComponent from '../CheckComponent';
import contacts from '../../constants/contacts';
import ContacIcon from '../ContactIcon';

const ContactCard = () => {
  const artist = useSelector((state) => state.artistDetails);

  return (
    <div className="ContactCard">
      {contacts.map(({ contact, icon }) => (
        <CheckComponent key={uiidv4()} condition={!!artist[contact]}>
          <a href={`https://${artist[contact]}`} target="_blank" rel="noreferrer">
            <ContacIcon contact={icon} />
          </a>
        </CheckComponent>
      ))}
    </div>
  );
};

export default ContactCard;
