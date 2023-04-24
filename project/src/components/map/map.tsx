import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import { getSelectedPoint } from '../../store/app-process/selectors';

type MapProps = {
  city: City;
  points: Offer[];
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

function Map({ city, points }: MapProps): JSX.Element {
  const selectedPoint = useAppSelector(getSelectedPoint);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city, points);
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== null && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div style={{height: '100%', minHeight: '500px', width: '100%', maxWidth: '1144px', margin: '0 auto 40px auto'}} ref={mapRef}></div>
  );
}

export default Map;
