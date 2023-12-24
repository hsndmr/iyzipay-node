import express from 'express';
import { createPayment } from './samples/create-payment';

const app = express();

app.get('/create-payment', (req, res) => {
  createPayment();

  res.send('OK');
});

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});
