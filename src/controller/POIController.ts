import { Request, Response } from "express";
import { POIService } from "../services/POIService";

export class POIController {
  constructor(private poiService: POIService) {}

  create(request: Request, response: Response) {
    const { name, x, y } = request.body;
    if (!name || !x || !y) {
      response.status(400).send();
    }
    if (name && parseInt(x) > -1 && parseInt(y) > -1) {
      const poi = this.poiService.create({ name, x, y });
      response.status(201).json(poi);
    }
    response.status(400).send();
  }

  find(request: Request, response: Response) {
    const { x, y } = request.query as { x: string; y: string };
    if (!x || !y) {
      response.status(400).send();
    }
    const pois = this.poiService.find({ x: parseInt(x), y: parseInt(y) });
    response.json(pois);
  }
}
