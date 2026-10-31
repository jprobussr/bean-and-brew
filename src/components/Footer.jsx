import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <nav className='footer__nav' aria-label='Footer navigation'>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
        </nav>
        <p>© 2026 Brew & Bean. All rights reserved.</p>
    </footer>
  )
}

export default Footer