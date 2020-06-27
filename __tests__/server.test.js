const server = require('../src/server/server')
const request = require('supertest')

describe('GET /', () => {
    test('status of 200', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
    });
});