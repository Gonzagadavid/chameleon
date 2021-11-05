import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import LogoArtist from '../LogoArtist';
import ContactCard from '../ContactCard';
import './style.css';
import nav from '../../constants/nav';

const Nav = () => (
  <div className="Nav">
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

export default Nav;
