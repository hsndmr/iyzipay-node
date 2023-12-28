import express from 'express';
import { createPayment } from './samples/create-payment';

const app = express();

app.get('/create-payment', (req, res) => {
  createPayment()
    .then((result) => {
      res.send(result.getResponseData());
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(3000, () => {});
