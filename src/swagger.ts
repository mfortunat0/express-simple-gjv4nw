export default {
  openapi: '3.0.0',
  info: {
    title: 'Pontos de Interesse por GPS',
    version: '1.0.0',
    paths: {
      '/poi': {
        get: {
          summary: 'Get Pois by X and Y coordinate',
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
      },
    },
  },
};
