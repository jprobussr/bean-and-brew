import './App.css';
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
      </main>
    </>
  );
};

export default App;
