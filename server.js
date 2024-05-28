// server.js
const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(9999, () => {
  console.log('Server is running on port 9999');
});