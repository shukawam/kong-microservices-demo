const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const products = [
  { id: 1, name: 'Cool T-Shirt', price: 20, imageUrl: '/images/cool-t-shirt.jpeg' },
  { id: 2, name: 'Awesome Mug', price: 15, imageUrl: '/images/awesome-mug.jpeg' },
  { id: 3, name: 'Stylish Cap', price: 25, imageUrl: '/images/stylish-cap.jpeg' },
  { id: 4, name: 'Trendy Sneakers', price: 50, imageUrl: '/images/trendy-sneakers.jpeg' },
  { id: 5, name: 'Pop T-Shirt', price: 20, imageUrl: '/images/pop-t-shirt.jpeg' },
  { id: 6, name: 'Vintage Jeans', price: 60, imageUrl: '/images/vintage-jeans.jpeg' },
  { id: 7, name: 'Classic Hoodie', price: 45, imageUrl: '/images/classic-hoodie.jpeg' },
  { id: 8, name: 'Sporty Socks', price: 10, imageUrl: '/images/sporty-socks.jpeg' },
  { id: 9, name: 'Minimalist Backpack', price: 70, imageUrl: '/images/minimalist-backpack.jpeg' },
  { id: 10, name: 'Comfy Sweatpants', price: 35, imageUrl: '/images/comfy-sweatpants.jpeg' },
  { id: 11, name: 'Wireless Earbuds', price: 80, imageUrl: '/images/wireless-earbuds.jpeg' },
  { id: 12, name: 'Smart Water Bottle', price: 30, imageUrl: '/images/smart-water-bottle.jpeg' },
  { id: 13, name: 'Ergonomic Mouse', price: 25, imageUrl: '/images/ergonomic-mouse.jpeg' },
];

app.get('/catalogue', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Catalogue service listening at http://localhost:${port}`);
});
