import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href="/" className='navbar__brand'>
        <span aria-hidden='true'>☕</span>
        <span>Brew & Bean</span>
      </a>
      <ul className='navbar__links'>
        <li><a className='navbar__link' href="#home">Home</a></li>
        <li><a className='navbar__link' href="#menu">Menu</a></li>
        <li><a className='navbar__link' href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
