import app from '../src/app.js';
import request from 'supertest';
import yargs from 'yargs';

const argv = yargs
    .option('startId', {
        alias: 's',
        describe: 'Input range start code',
        type: 'Integer'
    })
    .option('endId', {
        alias: 'e',
        description: 'Input range end code',
        type: 'Integer'
    })
    .argv;

const startId = argv.startId || 1;
const endId = argv.endId || 20;

describe('GET /api/entities/:startId/:endId', () => {
    test('should respond with a 200 status code for the start code and end code of the input range to be valid', async () => {
        const response = await request(app).get(`/api/entities/${startId}/${endId}`).send();
        expect(response.statusCode).toBe(200);
    });

    test('should respond with 400 status code if the start code or end code of the input range are not integers', async () => {
        const firstResponse = await request(app).get(`/api/entities/${'invalid'}/${endId}`).send();
        expect(firstResponse.statusCode).toBe(400);

        const secondResponse = await request(app).get(`/api/entities/${startId}/${'invalid'}`).send();
        expect(secondResponse.statusCode).toBe(400);
    });

})