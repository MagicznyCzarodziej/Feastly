import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import config from './config';
import routes from './api';

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use((err, req, res, next) => {
  if (!err) next();
  if (err instanceof SyntaxError) {
    res.status(400).send({
      error: {
        code: 'BAD_REQUEST',
        message: 'Provided request is invalid',
      },
    });
  }
});

app.use('/', routes);
app.get('/', (req, res) => {
  res.status(200).send({
    status: 'running',
  });
});

mongoose.connect(config.mongodb.URL, { useNewUrlParser: true, useCreateIndex: true });

app.listen(config.express.PORT, () => {
  console.log(`Listening on ${config.express.PORT}`);
});
