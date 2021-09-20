import React from 'react';
import { Link } from 'react-router-dom';
import LogoArtist from '../LogoArtist';
import ContactCard from '../ContactCard';
import './style.css';

const Nav = () => (
  <div className="Nav">
    <LogoArtist />
    <ContactCard />
    <nav>
      <ul>
        <li><Link to="/artist-details">Details</Link></li>
        <li><Link to="/artist-details/biography">Biograph</Link></li>
        <li><Link to="/discograph">Discograph</Link></li>
        <li><Link to="/video-music">Video Music</Link></li>
        <li><Link to="/lyrics">Lyrics</Link></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
