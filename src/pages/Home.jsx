import React, { useState } from "react";
import Header from "../header/Header";
import Map from "../map/Map";
import Sidebar from "../sidebar/Sidebar";
import AdForm from "../adForm/AdForm";
import css from "./Home.module.css";

const Home = () => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [ads, setAds] = useState([]);

  const updateAds = (newAds) => {
    setAds(newAds);
  };

  const handleMarkerClick = (selectedAd) => {
    setSelectedAd(selectedAd);
  };

  return (
    <>
      <Header />
      <div className={css.pageContainer}>
        <Sidebar
          setSelectedAd={setSelectedAd}
          updateAds={updateAds}
          selectedAd={selectedAd}
        />
        <div className={css.mapContainer}>
          <Map
            selectedAd={selectedAd}
            markers={ads}
            onMarkerClick={handleMarkerClick}
          />
        </div>
        <AdForm updateAds={updateAds} />
      </div>
    </>
  );
};

export default Home;
