const express = require('express');

// const People = require('../People/People')

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' });
  
});

module.exports = server