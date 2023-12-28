import express from 'express';
import { createPayment } from './samples/create-payment';

const app = express();

app.get('/create-payment', (req, res) => {
  createPayment()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then((result) => {})
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((err) => {})
    .finally(() => {
      res.send('OK');
    });
});

app.listen(3000, () => {});
