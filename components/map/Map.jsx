import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const icon = L.icon({ iconUrl: "./marker-icon.png" });

const Map = () => {
  return (
    <MapContainer center={[-3.3277424255514476, 114.61675338702675]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-3.3277424255514476, 114.61675338702675]}  icon={icon}>
        <Popup>
          Badan Pusat Statistik. <br /> Kota Banjarmasin.
        </Popup>
      </Marker>
    </MapContainer>
  )
}


export default Map