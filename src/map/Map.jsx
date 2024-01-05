import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { getAds } from "../services";

const Map = ({ selectedAd, markers, onMarkerClick }) => {
  // const [markers, setMarkers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getAds();

  //       setMarkers(response.data);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   fetchData();
  // }, [markers]);

  const customIcon = new Icon({
    iconUrl: "/images/pin.png",
    iconSize: [30, 30], // size
  });

  const handleMarkerClick = (id) => {
    const selectedMarker = markers.find((marker) => marker.id === id);
    onMarkerClick(selectedMarker);
  };

  return (
    <section>
      <MapContainer center={[47.9022, 33.3441]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(({ geo, title, id }) => (
          <Marker
            key={id}
            position={geo}
            icon={customIcon}
            opacity={selectedAd && selectedAd.id === id ? 1 : 0.5}
            eventHandlers={{
              click: () => handleMarkerClick(id),
            }}
          >
            <Popup>{title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Map;
