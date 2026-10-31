import './App.css';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
