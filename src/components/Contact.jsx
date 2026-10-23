import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Get in Touch</h2>
      <p className="contact__description">
        Have a question about our coffee, fresh beans, or brewing process? We'd
        love to hear from you! Send us a message, and we'll be happy to help.
      </p>
      <form className="contact__form">
        <label className="contact__label" htmlFor="name">
          Name:
        </label>
        <input
          className="contact__input"
          id="name"
          name="name"
          type="text"
          required
        />
        <label className="contact__label" htmlFor="email">
          Email:
        </label>
        <input
          className="contact__input"
          type="email"
          id="email"
          name="email"
          required
        />
        <label className="contact__label" htmlFor="message">
          Message:
        </label>
        <textarea
          className="contact__textarea"
          name="message"
          id="message"
          required
        ></textarea>
        <button className="contact__button" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
