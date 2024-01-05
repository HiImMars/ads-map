import React, { useState } from "react";
import { getAds, getCoordinates } from "../services";
import css from "./AdForm.module.css";
import axios from "axios";

// const POST_URL = "https://65971a09668d248edf229561.mockapi.io/ads";

const POST_URL = "https://65986476668d248edf248d1e.mockapi.io/ads";

const AdForm = ({ updateAds }) => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const cityValue = e.target.elements.city.value;
    const titleValue = e.target.elements.title.value;
    const imageValue = e.target.elements.image.value;
    const priceValue = e.target.elements.price.value;

    const formData = {
      city: cityValue,
      title: titleValue,
      image: imageValue,
      price: priceValue,
    };

    const fetchCoordinates = async () => {
      try {
        const resp = await getCoordinates(address);
        const lat = resp.data[0].lat;
        const lon = resp.data[0].lon;
        formData.geo = [lat, lon];

        const postResponce = await axios.post(POST_URL, formData);

        console.log("Posted", postResponce.data);

        const response = await getAds();
        updateAds(response.data);
      } catch (error) {
        console.log("Error", error.message);
      }
    };

    fetchCoordinates();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h2>Enter your ads info</h2>
      <label>
        City
        <input
          name="city"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        Title
        <input type="text" name="title" />
      </label>
      <label>
        Image
        <input type="text" name="image" />
      </label>
      <label>
        Price in UAH
        <input type="number" name="price" />
      </label>
      <button type="submit">Make an Advertisement</button>
    </form>
  );
};

export default AdForm;
