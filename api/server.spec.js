const request = require('supertest');
const server = require('./server');

describe('server.js', () => {

  describe('get /', () => {
    
    it('should return OK 200', async () => {
      const res = await request(server).get('/');

      expect(res.status).toBe(200);
    });

  });
  
});