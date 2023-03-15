import swaggerAutogen from 'swagger-autogen';
import path from 'path';

const API_PREFIX = 'api/v1'

const doc = {
    info: {
      version: '1.0.0', // by default: '1.0.0'
      title: 'Login-JWT', // by default: 'REST API'
      description: 'Login-JWT login microservice, developed for a microservices study.',
    },
    host: '',
    basePath: API_PREFIX, 
    schemes: ['http'],
    consumes: ['application/json'], 
    produces: ['application/json'], 
    tags: [ 
      {
        name: 'Login', 
        description: '',
      },
    ],
    securityDefinitions: {},
};

const outputFile = path.join(__dirname, '..', 'config/swagger-output.json');
const endpointsFiles = [path.join(__dirname, '/api/routes/routes.ts')];

swaggerAutogen(outputFile, endpointsFiles, doc);
