const express = require('express');
const cors = require('cors');

const people = require('../People/peopleModel')


const server = express();

server.use(cors());
server.use(express.json());


server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' });
  
});

server.get('/api/people', async (req, res) => {
  const peopleList = await people.getAll();

  res.status(200).json(peopleList);
});

server.post('/api/people', async (req, res) => {
  try {
    const person = await people.insert(req.body);
    if (person) {
      return res.status(200).json({ message: 'person added' })
    } else {
      return res.status(404).json({ message: 'not today' })
    }
  } catch (error) {
    return res.status(500).json({ error: "The person could not be added at this time"})
  }
});

server.delete('/api/people/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await people.remove(id);
    res.status(200).json(deleted)
  } catch (error) {
    res.status(500).json({ message: 'could not delete user' })
  }
});

module.exports = server