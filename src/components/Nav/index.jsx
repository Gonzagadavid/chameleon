import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import LogoArtist from '../LogoArtist';
import ContactCard from '../ContactCard';
import './style.css';
import nav from '../../constants/nav';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import CheckComponent from '../CheckComponent';

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [width] = useWindowDimensions();

  return (
    <div className={`Nav ${hidden ? 'Nav-visible' : ''}`}>
      <CheckComponent condition={width < 900}>
        <button type="button" onClick={() => setHidden(!hidden)}>
          <CheckComponent condition={hidden}>
            <IoIosArrowBack />
          </CheckComponent>
          <CheckComponent condition={!hidden}>
            <IoIosArrowForward />
          </CheckComponent>
        </button>
      </CheckComponent>
      <LogoArtist />
      <ContactCard />
      <nav>
        <ul>
          {nav.map(({ route, label }) => (
            <li key={uuidv4()}><Link to={route}>{label}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
