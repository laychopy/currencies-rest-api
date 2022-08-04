const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const config = require('../../config/config');

const router = express.Router();

const swaggerDefinition = {
    openapi: '3.0.0',
    info : {
        title : "Currencies API",
        version: "1.0.0",
        description: "Crypto curriencies API"
      },
    servers: [
      {
        url: `http://localhost:${config.port}/v1`,
      },
    ],
    basePath: '/',
    securityDefitions: {
      bearerAuth: {
        type: 'basic',
        name: 'Authorization',
      }
    }
  };


const specs = swaggerJsdoc({
    swaggerDefinition,
  apis: ['routes/v1/*.yml','routes/v1/*.js'],
});

router.use('/', swaggerUi.serve);
router.get(
  '/',
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

module.exports = router;