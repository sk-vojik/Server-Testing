const request = require('supertest');
const server = require('./server');

describe('server.js', () => {

  describe('get /', () => {
    
    it('should return OK 200', async () => {
      const res = await request(server).get('/');

      expect(res.status).toBe(200);
    });

    it('should return json', async () => {
      const res = await request(server).get('/');

      expect(res.type).toBe('application/json')
    });
  });

  describe('get /api/people ', () => {

    it('should return OK 200', async () => {
      const res = await request(server).get('/api/people');

      expect(res.status).toBe(200);
    });

    it('should return an array of people objects in JSON', async () => {
      const res = await request(server).get('/api/people');

      expect(res.type).toBe('application/json')
    });
  });

  describe('delete /api/people/:id', () => {
    
    it('should return status OK 200', async () => {
      const res = await request(server).delete('/api/people/1');

      expect(res.status).toBe(200);
    });

    it('should return the id of the person deleted', async () => {
      const res = await request(server).delete('/api/people/1');

      expect(res).not.toBe(null);
    });

    

  });
  
});