import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Fresh Coffee. Warm Moments.</h1>
        <p className="hero__description">
          Discover handcrafted coffee, fresh pastries, and a cozy place to slow
          down.
        </p>
        <a className="hero__button" href="#menu">
          Explore Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
