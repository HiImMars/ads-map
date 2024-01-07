import React, { useState } from "react";
import { getCoordinates } from "../services";
import css from "./AdForm.module.css";
import axios from "axios";

const POST_URL = "https://65986476668d248edf248d1e.mockapi.io/ads";

const AdForm = ({ updateAds, ads }) => {
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
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

        const isOnBackend = ads.find(
          (ad) => ad.city.toLowerCase() === address.toLowerCase()
        );

        if (address === isOnBackend?.city) {
          const sameLat = parseFloat(lat) + 0.001;
          const sameLon = parseFloat(lon) + 0.001;
          formData.geo = [sameLat, sameLon];
        } else {
          formData.geo = [lat, lon];
        }

        const postResponse = await axios.post(POST_URL, formData);

        console.log("Posted", postResponse.data);

        updateAds((prevAds) => [...prevAds, postResponse.data]);
      } catch (error) {
        console.log("Error", error.message);
      } finally {
        setAddress("");
        setTitle("");
        setImage("");
        setPrice("");
      }
    };

    fetchCoordinates();
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
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Image
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        Price in UAH
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button type="submit">Make an Advertisement</button>
    </form>
  );
};

export default AdForm;
