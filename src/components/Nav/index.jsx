import React from 'react';
import { Link } from 'react-router-dom';
import LogoArtist from '../LogoArtist';
import ContactCard from '../ContactCard';
import './style.css';
import {
  ARTIST_DETAILS, BIOGRAPHY, DISCOGRAPHY, FAVORITES, VIDEOS,
} from '../../constants/routes';

const Nav = () => (
  <div className="Nav">
    <LogoArtist />
    <ContactCard />
    <nav>
      <ul>
        <li><Link to={ARTIST_DETAILS}>Details</Link></li>
        <li><Link to={BIOGRAPHY}>Biograph</Link></li>
        <li><Link to={DISCOGRAPHY}>Discograph</Link></li>
        <li><Link to={VIDEOS}>Videos Music</Link></li>
        <li><Link to={FAVORITES}>Favorites</Link></li>
        <li><Link to="/">Back</Link></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
