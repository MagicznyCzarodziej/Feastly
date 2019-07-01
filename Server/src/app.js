import express from 'express';
import routes from './api';

const app = express();

app.use('/', routes);
app.get('/', (req, res) => {
  res.status(200).send({
    status: 'running',
  });
});

app.listen(3000, () => {
  console.log('Listening');
})