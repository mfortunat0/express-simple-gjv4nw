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
    console.log(x, y);
    const pois = this.POIs.filter(({ x: X, y: Y }) => {
      const absX = Math.abs(x - X);
      const absY = Math.abs(y - Y);
      return absX + absY <= 10;
    });
    return pois;
  }
}
