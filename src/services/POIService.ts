import { POIDto } from '../dto/POIDto';
import { POI } from '../model/POI';

export class POIService {
  private POIs: POI[];

  constructor() {
    this.POIs = [];
  }

  create({ name, x, y }: POIDto) {
    const poi = new POI(name, x, y);
    this.POIs.push(poi);
    return poi;
  }

  find({ x, y }: POIDto) {
    const pois = this.POIs.filter(
      ({ x: X, y: Y }) =>
        (x - X <= 10 || x - X >= -10) && (y - Y <= 10 || y - Y >= -10)
    ).map(
      (poi) =>
        ({ name }) =>
          name
    );
    return pois;
  }
}
