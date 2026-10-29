import './About.css';

const aboutContent = {
  title: 'Our Story',
  description:
    'At Brew & Bean, we believe every great day starts with a great cup of coffee.',
  mission:
    'Our mission is to bring people together through freshly brewed coffee and a welcoming atmosphere.',
};

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className='about__title'>{aboutContent.title}</h2>
      <p className='about__text'>{aboutContent.description}</p>
      <p className='about__text'>{aboutContent.mission}</p>
    </section>
  );
};

export default About;
