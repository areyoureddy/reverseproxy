const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Received request at /');
  res.send('/');
});

app.get('/hello', (req, res) => {
  console.log('Received request at /hello');
  res.send('/hello');
});

app.listen(8080, () => {
  console.log('Test Server');
  console.log('Listening at localhost:8080');
});