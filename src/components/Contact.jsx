import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsSubmitted(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsSubmitted(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName('');
    setEmail('');
    setMessage('');

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Get in Touch</h2>
      <p className="contact__description">
        Have a question about our coffee, fresh beans, or brewing process? We'd
        love to hear from you! Send us a message, and we'll be happy to help.
      </p>
      <form onSubmit={handleSubmit} className="contact__form">
        <label className="contact__label" htmlFor="name">
          Name:
        </label>
        <input
          className="contact__input"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
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
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label className="contact__label" htmlFor="message">
          Message:
        </label>
        <textarea
          className="contact__textarea"
          name="message"
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
        <button className="contact__button" type="submit">
          Send Message
        </button>
      </form>

      {isSubmitted && (
        <p className="contact__success">
          Form submitted successfully! (Demo only — no message was sent.)
        </p>
      )}
    </section>
  );
};

export default Contact;
