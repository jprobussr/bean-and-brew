import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
    setIsSubmitted(false);
  };

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
    setIsSubmitted(false);
  };

  const handleMessageChange = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name, formData.email, formData.message);
    setFormData({ name: '', email: '', message: '' });

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
          value={formData.name}
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
          value={formData.email}
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
          value={formData.message}
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
