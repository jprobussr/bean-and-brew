const coffeeMenu = [
  {
    id: 1,
    name: 'Espresso',
    description: 'Rich and bold',
    price: 3.0,
    image: `${import.meta.env.BASE_URL}images/menu/espresso.jpg`,
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Smooth and creamy',
    price: 4.5,
    image: `${import.meta.env.BASE_URL}images/menu/cappuccino.jpg`,
  },
  {
    id: 3,
    name: 'Caffè Latte',
    description: 'Espresso with steamed milk',
    price: 4.75,
    image: `${import.meta.env.BASE_URL}images/menu/latte.jpg`,
  },
  {
    id: 4,
    name: 'Iced Coffee',
    description: 'Cool and refreshing',
    price: 4.0,
    image: `${import.meta.env.BASE_URL}images/menu/iced-coffee.jpg`,
  },
];

export default coffeeMenu;
