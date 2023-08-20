const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', (req, res) => {
  setTimeout(() => {
    data = {
      name: 'john',
      age: 55,
      income: 1e6,
    };
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  }, 1e3);
});

app.post('/data-v2', (req, res) => {
  console.log('body', req.body);
  setTimeout(() => {
    data = {
      ...req.body,
      name: 'johnyyyyyyy',
      age: 55,
      income: 1e6,
    };
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  }, 1e3);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
