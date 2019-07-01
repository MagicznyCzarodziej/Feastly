import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import routes from './api';

const app = express();

app.use('/', routes);
app.get('/', (req, res) => {
  res.status(200).send({
    status: 'running',
  });
});

mongoose.connect(config.mongodb.URL, { useNewUrlParser: true });

app.listen(config.express.PORT, () => {
  console.log('Listening');
});
