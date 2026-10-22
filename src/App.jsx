import './App.css';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
