import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import css from "./Map.module.css";

const Map = ({ selectedAd, markers, onMarkerClick }) => {
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

        {markers.map(({ geo, title, id, image, price, city }) => (
          <Marker
            key={id}
            position={geo}
            icon={customIcon}
            opacity={selectedAd && selectedAd.id === id ? 1 : 0.5}
            eventHandlers={{
              click: () => handleMarkerClick(id),
            }}
          >
            <Popup>
              <div className={css.popupDiv}>
                <h2>{title}</h2>
                <img src={image} alt={title} />
                <p>{price} UAH</p>
                <p>{city}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Map;
