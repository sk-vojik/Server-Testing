const db = require('../data/dbConfig');

module.exports = {
  insert,
  getAll,
  remove
}

async function insert(person) {
  const [id] = await db('people').insert(person);

  return db('people').where({id}).first();
}

function getAll() {
  return db('people');
}

async function remove(id) {
  const response = await db('people').where({ id }).del();

  return response
}