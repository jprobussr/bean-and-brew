import { use, useState } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'Menu', href: '#menu' },
  { id: 3, name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__brand">
        <span aria-hidden="true">☕</span>
        <span>Brew & Bean</span>
      </a>
      <button
        className="navbar__toggle"
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <ul
        id="primary-navigation"
        className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
      >
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <a className="navbar__link" href={link.href} onClick={closeMenu}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
