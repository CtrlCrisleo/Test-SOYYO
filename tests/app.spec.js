import app from '../src/app.js';
import request from 'supertest';
import yargs from 'yargs';
import { describe, test, expect } from '@jest/globals';

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
    describe('When the input range is valid', () => {
        test('should respond with a 200 status code for the start code and end code of the input range to be valid', async () => {
            const response = await request(app).get(`/api/entities/${startId}/${endId}`).send();
            expect(response.statusCode).toBe(200);
        });
    });

    describe('When the input range is not valid', () => {
        test('should respond with 400 status code if the start code or end code of the input range are not integers', async () => {
            const firstResponse = await request(app).get(`/api/entities/${'invalid'}/${endId}`).send();
            expect(firstResponse.statusCode).toBe(400);
    
            const secondResponse = await request(app).get(`/api/entities/${startId}/${'invalid'}`).send();
            expect(secondResponse.statusCode).toBe(400);
        });
    
        test('should response with 400 status code if the start code or end code of the input range are less than 1', async () => {
            const firstResponse = await request(app).get(`/api/entities/${0}/${endId}`).send();
            expect(firstResponse.statusCode).toBe(400);
    
            const secondResponse = await request(app).get(`/api/entities/${startId}/${0}`).send();
            expect(secondResponse.statusCode).toBe(400);
        });
    
        test('should response with 400 status code if the start code or end code of the input range are greater than 20', async () => {
            const firstResponse = await request(app).get(`/api/entities/${21}/${endId}`).send();
            expect(firstResponse.statusCode).toBe(400);
    
            const secondResponse = await request(app).get(`/api/entities/${startId}/${21}`).send();
            expect(secondResponse.statusCode).toBe(400);
        });
    });

    describe('When the information is invalid on some entity within the input range', () => {
        test('should respond with 404 status code if the information on some entity within the input range is invalid', async () => {
            const response = await request(app).get(`/api/entities/${startId}/${endId}`).send();
            const outputData = response.body;
            const inputDataLength = endId - startId + 1;

            if (outputData.length < inputDataLength) {
                expect(response.statusCode).toBe(404);
                expect(response.text).toBe(`No se encontró información válida en, al menos, una entidad asociada al rango ${startId} - ${endId}`);
            }
        });
    });
});