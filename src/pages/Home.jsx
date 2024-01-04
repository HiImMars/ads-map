import React from "react";
import Header from "../header/Header";
import Map from "../map/Map";
import Sidebar from "../sidebar/Sidebar";
import AdForm from "../adForm/AdForm";
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
        <AdForm />
      </div>
    </>
  );
};

export default Home;
