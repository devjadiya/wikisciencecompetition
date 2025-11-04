'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';

export interface PhotoPoint {
  pageid: number;
  lat: number;
  lon: number;
  title: string;
  user: string;
  thumbnail: string;
  commons_url: string;
}

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const INDIA_BOUNDS: L.LatLngBoundsExpression = [
  [6.5, 68.1],    // SW
  [35.5, 97.4],   // NE
];

interface MapComponentProps {
  points: PhotoPoint[];
}

export default function MapComponent({ points }: MapComponentProps) {
  const indiaCenter: L.LatLngExpression = [22.5937, 78.9629];

  return (
    <MapContainer
      center={indiaCenter}
      zoom={5}
      style={{ height: '80vh', width: '100%' }}
      minZoom={4}
      maxZoom={12}
      maxBounds={INDIA_BOUNDS}
      scrollWheelZoom={true}
      className="rounded-lg shadow border"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((point) => (
        <Marker key={point.pageid} position={[point.lat, point.lon]} icon={customIcon}>
          <Popup>
            <div className="w-64">
              <div className="relative h-40 w-full mb-2 rounded-md overflow-hidden bg-muted">
                <img src={point.thumbnail} alt={point.title} className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold text-sm truncate" title={point.title}>{point.title}</h3>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <a
                  href={`https://commons.wikimedia.org/wiki/User:${point.user}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >{point.user}</a>
              </div>
              <a
                href={point.commons_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-3 px-2 py-1 rounded bg-blue-600 text-white text-center hover:bg-blue-700"
              >
                View on Commons
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
