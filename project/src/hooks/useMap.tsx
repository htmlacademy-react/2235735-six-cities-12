import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { Map, TileLayer,Marker, LayerGroup } from 'leaflet';
import { City, Offer } from '../types/offers';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
  points: Offer[]
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  useEffect(() => {

    if (isRenderedRef.current && map) {
      const markers:Marker[] = points.map((point)=>{
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });
        return marker;
      });
      const layerGroup = new LayerGroup(markers);
      layerGroup.addTo(map);
      layerGroup.clearLayers();
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
  }, [mapRef, city, map, points]);

  return map;
}


export default useMap;
