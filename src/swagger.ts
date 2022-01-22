export default {
  openapi: '3.0.0',
  info: {
    title: 'Pontos de Interesse por GPS',
    version: '1.0.0',
  },
  paths: {
    '/poi': {
      get: {
        summary: 'Get Pois by X and Y coordinate',
        tags: ['POI'],
        parameters: [
          {
            in: 'query',
            name: 'x',
            required: true,
            schema: {
              type: 'number',
            },
          },
          {
            in: 'query',
            name: 'y',
            required: true,
            schema: {
              type: 'number',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      post: {
        summary: 'Create a poi',
        tags: ['POI'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  x: {
                    type: 'number',
                  },
                  y: {
                    type: 'number',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Created',
          },
          400: {
            description: 'Bad request',
          },
        },
      },
    },
  },
};
