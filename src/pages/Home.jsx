import React from "react";
import Header from "../header/Header";
import Map from "../map/Map";
import Sidebar from "../sidebar/Sidebar";
import Filters from "../filters/Filters";
import css from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={css.pageContainer}>
        <Sidebar />
        <div className={css.mapContainer}>
          <Map />
        </div>
        <Filters />
      </div>
    </>
  );
};

export default Home;
