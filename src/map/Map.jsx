import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const Map = () => {
  const markers = [
    {
      geocode: [49.5883, 34.551],
      title: "Poltava",
    },
    {
      geocode: [50.4501, 30.5234],
      title: "Kyiv",
    },
    {
      geocode: [46.4825, 30.7233],
      title: "Odesa",
    },
    {
      geocode: [49.8397, 24.0297],
      title: "Lviv",
    },
    {
      geocode: [48.4647, 35.0462],
      title: "Dnipro",
    },
  ];

  const customIcon = new Icon({
    iconUrl: "",
    iconSize: [30, 30], // size
  });

  return (
    <section>
      <MapContainer center={[48.5079, 32.2623]} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(({ geocode, title }, idx) => (
          <Marker key={idx} position={geocode}></Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Map;
