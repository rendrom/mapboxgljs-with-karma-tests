import {
  Map,
  MapboxOptions
} from 'mapbox-gl';

import { EventEmitter } from 'events';

export class MapboxglMapAdapter {

  emitter = new EventEmitter();
  map?: Map;

  // create(options: MapOptions = {target: 'map'}) {
  create(options: MapboxOptions) {
    return new Promise((resolve, reject) => {
      const mapOpt: MapboxOptions = {
        attributionControl: false,
        ...options,
      };
      mapOpt.style = {
        version: 8,
        name: 'Empty style',
        sources: {},
        layers: []
      }
      this.map = new Map(mapOpt);
      const onLoad = () => {
        this.emitter.emit('create', this);
        resolve(this);
      }
      if (this.map.loaded()) {
        onLoad();
      }
      this.map.once('load', () => {
        onLoad();
      });
    })
  }
}
