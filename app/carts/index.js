
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());

app.use(express.json());

let cart = [];

app.get('/cart', (req, res) => {
  res.json(cart);
});

app.post('/cart', (req, res) => {
  const item = req.body;
  cart.push(item);
  res.status(201).json(item);
});

app.delete('/cart/:id', (req, res) => {
  const idToDelete = parseInt(req.params.id, 10);
  console.log('Carts service received DELETE request for ID:', idToDelete, '(parsed as int)');
  cart = cart.filter(item => item.id !== idToDelete);
  res.status(204).send();
});

app.delete('/cart', (req, res) => {
  cart = [];
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Carts service listening at http://localhost:${port}`);
});
