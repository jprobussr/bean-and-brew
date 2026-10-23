import './MenuItem.css';

const MenuItem = ({ name, description, price, image }) => {
  return (
    <article className="menu-item">
      <img className="menu-item__image" src={image} alt={name} loading="lazy" />
      <h3 className="menu-item__name">{name}</h3>
      <p className="menu-item__description">{description}</p>
      <p className="menu-item__price">${price.toFixed(2)}</p>
    </article>
  );
};

export default MenuItem;
