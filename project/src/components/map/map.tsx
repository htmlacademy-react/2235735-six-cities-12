import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '../../types/offers';

type MapProps = {
    city: City;
    points: Offer[];
    selectedPoint: Offer | undefined;
    mapHeight: string;
  };

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, points, selectedPoint,mapHeight}:MapProps):JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div style={{height: mapHeight}} ref={mapRef}></div>
  );
}

export default Map;
