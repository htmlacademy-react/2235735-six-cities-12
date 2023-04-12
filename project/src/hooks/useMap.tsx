import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { Map, TileLayer,Marker } from 'leaflet';
import { City } from '../types/offers';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  useEffect(() => {

    if (isRenderedRef.current && map) {
      map.eachLayer((layer) => {
        if (layer instanceof Marker) {
          layer.remove();
        }
      });
      map.setView([city.location.latitude, city.location.longitude], map.getZoom(), );
    }


    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, map]);

  return map;
}


export default useMap;
