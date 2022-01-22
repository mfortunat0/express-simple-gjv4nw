import { Router } from 'express';
import { POIController } from '../controller/POIController';
import { POIService } from '../services/POIService';

const poiRoutes = Router();
const poiService = new POIService();
const poiController = new POIController(poiService);

poiRoutes.get('/poi', poiController.find.bind(poiController));
poiRoutes.post('/poi', poiController.create.bind(poiController));

export { poiRoutes };
