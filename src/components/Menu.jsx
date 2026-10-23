import './Menu.css';
import coffeeMenu from '../data/menuData.js';
import MenuItem from './MenuItem.jsx';

const Menu = () => {
  return (
    <section id='menu' className='menu'>
        <h2 className='menu__title'>Our Coffee Menu</h2>
        <div className='menu__grid'>
            {coffeeMenu.map((item) => {
                return <MenuItem key={item.id} name={item.name} description={item.description} price={item.price} />
            })}
        </div>
    </section>
  )
}

export default Menu