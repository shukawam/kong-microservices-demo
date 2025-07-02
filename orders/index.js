
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;

app.use(cors());

app.use(express.json());

let orders = [];

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.post('/orders', (req, res) => {
  // 50% chance of failure for demo purposes
  if (Math.random() < 0.5) {
    res.status(500).send('Internal Server Error');
    return;
  }
  const order = req.body;
  orders.push(order);
  res.status(201).json(order);
});

app.listen(port, () => {
  console.log(`Orders service listening at http://localhost:${port}`);
});
