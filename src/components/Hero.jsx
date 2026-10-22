import './Hero.css';

const heroContent = {
  title: 'Fresh Coffee. Warm Moments',
  description:
    'Discover handcrafted coffee, fresh pastries, and a cozy place to slow down.',
  buttonText: 'Explore Our Menu',
  buttonLink: '#menu',
};

const Hero = () => {

    const {title, description, buttonText, buttonLink} = heroContent;

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">
          {description}
        </p>
        <a className="hero__button" href={buttonLink}>
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
