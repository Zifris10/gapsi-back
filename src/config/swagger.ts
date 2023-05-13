import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import { SwaggerInterface } from '../interfaces';

const swaggerPaths: string[] = [
    'providers',
    'users',
    'version'
];

const options: SwaggerInterface = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Gapsi',
            version: '1.0.0',
            description: 'End Points Gapsi',
            contact: {
                name: 'Gapsi',
                url: 'https://www.google.com/'
            }
        },
        servers: [
            {
                url: 'http://localhost:4000/api/v1/',
                description: 'Localhost server'
            }
        ]
    },
    apis: swaggerPaths.map(item => `${path.join(__dirname, `../${item}/*`)}`)
};

export const openapiSpecification = swaggerJsdoc(options);