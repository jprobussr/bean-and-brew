import './App.css';
import Contact from './components/Contact.jsx';
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
        <Contact />
      </main>
    </>
  );
};

export default App;
