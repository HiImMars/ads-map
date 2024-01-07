import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Map from "../map/Map";
import Sidebar from "../sidebar/Sidebar";
import AdForm from "../adForm/AdForm";
import css from "./Home.module.css";
import { getAds } from "../services";

const Home = () => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [ads, setAds] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filteredAds, setFilteredAds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loaded) {
          const response = await getAds();

          setAds(response.data);
          setLoaded(true);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [loaded]);

  const updateAds = (newAds) => {
    setAds(newAds);
  };

  const handleMarkerClick = (selectedAd) => {
    setSelectedAd(selectedAd);
  };

  return (
    <>
      <Header ads={ads} setFilteredAds={setFilteredAds} />
      <div className={css.pageContainer}>
        <AdForm updateAds={updateAds} ads={ads} />
        <div className={css.mapContainer}>
          <Map
            selectedAd={selectedAd}
            markers={ads}
            onMarkerClick={handleMarkerClick}
          />
        </div>
        <Sidebar
          setSelectedAd={setSelectedAd}
          ads={ads}
          selectedAd={selectedAd}
          filteredAds={filteredAds}
        />
      </div>
    </>
  );
};

export default Home;
