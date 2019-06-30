import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({
    'status': 'running',
  })
});

app.listen(3000, () => {
  console.log('Listening');
})