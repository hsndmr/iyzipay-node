import express from 'express';
import { createPayment } from './samples/create-payment';

const app = express();

app.get('/create-payment', (req, res) => {
  createPayment()
    .then((result) => {})
    .catch((err) => {})
    .finally(() => {
      res.send('OK');
    });
});

app.listen(3000, () => {});
