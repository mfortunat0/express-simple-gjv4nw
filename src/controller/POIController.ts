import { Request, Response } from 'express';
import { POIService } from '../services/POIService';

export class POIController {
  constructor(private poiServices: POIService) {}

  create(request: Request, response: Response) {
    const { name, x, y } = request.body;
    if (name && parseInt(x) > -1 && parseInt(y) > -1) {
      const poi = this.poiServices.create({ name, x, y });
      response.status(201).json(poi);
    }
    response.status(400).json({
      error: 'Bad request',
    });
  }

  find(request: Request, response: Response) {
    const { x, y } = request.query as { x: string; y: string };
    const pois = this.poiServices.find({ x: parseInt(x), y: parseInt(y) });
    response.json(pois);
  }
}
