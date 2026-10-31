import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    

  return (
    <footer className='footer'>
        <nav className='footer__nav' aria-label='Footer navigation'>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
        </nav>
        <p>© {currentYear} Brew & Bean. All rights reserved.</p>
    </footer>
  )
}

export default Footer