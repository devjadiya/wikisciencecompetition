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

// DEMO: Replace with your actual API/fetched points with geo coordinates in India!
const demoPoints: PhotoPoint[] = [
  {
    pageid: 1,
    lat: 28.6139,
    lon: 77.2090,
    title: 'India Gate, Delhi',
    user: 'User1',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/India_Gate_2012.jpg',
    commons_url: 'https://commons.wikimedia.org/wiki/File:India_Gate_2012.jpg'
  },
  {
    pageid: 2,
    lat: 19.0760,
    lon: 72.8777,
    title: 'Gateway of India, Mumbai',
    user: 'User2',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Gateway_of_India_by_Siddhartha_Rout.jpg',
    commons_url: 'https://commons.wikimedia.org/wiki/File:Gateway_of_India_by_Siddhartha_Rout.jpg'
  },
  {
    pageid: 3,
    lat: 22.5726,
    lon: 88.3639,
    title: 'Victoria Memorial, Kolkata',
    user: 'User3',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Victoria_Memorial_Kolkata_sunset.jpg',
    commons_url: 'https://commons.wikimedia.org/wiki/File:Victoria_Memorial_Kolkata_sunset.jpg'
  }
];

const INDIA_BOUNDS: L.LatLngBoundsExpression = [
  [6.5, 68.1],    // SW
  [35.5, 97.4],   // NE
];

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function PhotoMapPage() {
  const indiaCenter: L.LatLngExpression = [22.5937, 78.9629];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Wiki Science Competition – India Geo-Photos Map</h1>
      <p className="mb-4 text-muted-foreground">
        All uploaded images with geo-coordinates, mapped over India!
      </p>
      <div className="border rounded-lg overflow-hidden shadow-lg">
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
          {demoPoints.map((point) => (
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
      </div>
    </main>
  );
}
