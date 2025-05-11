import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import logo from "../assets/img/Portfolio_logo.webp";


const menuItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div id='header-Logo'>
        <Link to="/" aria-label="Home">
          <img src={logo} alt="Site logo" />
          <span>Homepage</span>
        </Link>
      </div>

      <div id='header-nav'>
        <nav className="header-nav-desktop" aria-label="Main navigation">
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`${menuOpen ? 'block' : 'hidden'}`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
