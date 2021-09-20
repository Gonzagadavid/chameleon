import React from 'react';
import { Link } from 'react-router-dom';
import LogoArtist from '../LogoArtist';
import ContactCard from '../ContactCard';
import './style.css';

const Nav = () => (
  <nav className="Nav">
    <LogoArtist />
    <ContactCard />
    <Link to="/artist-details">Details</Link>
    <Link to="/artist-details/biography">Biograph</Link>
    <Link to="/discograph">Discograph</Link>
    <Link to="/video-music">Video Music</Link>
    <Link to="/lyrics">Lyrics</Link>
  </nav>
);

export default Nav;
