import { useState } from 'react';
import './Contact.css';
import FormInput from './FormInput.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        <FormInput
          label="Name:"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <FormInput
          label="Email:"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="contact__label" htmlFor="message">
          Message:
        </label>
        <textarea
          className="contact__textarea"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
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
