import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { poiRoutes } from './routes/POIRoutes';
import swaggerDocs from './swagger';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(poiRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
