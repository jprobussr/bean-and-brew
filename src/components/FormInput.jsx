import './FormInput.css';

const FormInput = ({ label, name, type, value, onChange }) => {
  return (
    <div className='form-input'>
      <label className="contact__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="contact__input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
