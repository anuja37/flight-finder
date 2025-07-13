import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
const DefaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function FlightMap({ departure, arrival }) {
  if (!departure?.location?.coordinates || !arrival?.location?.coordinates) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Loading map...
      </div>
    );
  }

  const departureCoords = [
    departure.location.coordinates[1],
    departure.location.coordinates[0]
  ];

  const arrivalCoords = [
    arrival.location.coordinates[1],
    arrival.location.coordinates[0]
  ];

  const center = [
    (departureCoords[0] + arrivalCoords[0]) / 2,
    (departureCoords[1] + arrivalCoords[1]) / 2
  ];

  return (
    <MapContainer
      center={center}
      zoom={4}
      style={{ height: '100%', width: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={departureCoords}>
        <Popup>{departure.city}</Popup>
      </Marker>
      <Marker position={arrivalCoords}>
        <Popup>{arrival.city}</Popup>
      </Marker>
      <Polyline 
        positions={[departureCoords, arrivalCoords]} 
        color="blue"
        weight={2}
      />
    </MapContainer>
  );
}