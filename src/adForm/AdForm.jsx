import React, { useState } from "react";
import { MOCK_API_BASE_URL, getCoordinates } from "../services";
import css from "./AdForm.module.css";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

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

        const postResponse = await axios.post(
          `${MOCK_API_BASE_URL}/ads`,
          formData
        );

        Notify.success("You advertisement successfully posted");

        updateAds((prevAds) => [...prevAds, postResponse.data]);
      } catch (error) {
        Notify.failure("Error, cannot post your advertisement");
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
      <h2 className={css.title}>Enter your ads info</h2>
      <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="city">
          City
        </label>
        <input
          className={css.input}
          id="city"
          name="city"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="title">
          Title
        </label>
        <input
          className={css.input}
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="image">
          Image
        </label>
        <input
          className={css.input}
          id="image"
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="price">
          Price in UAH
        </label>
        <input
          className={css.input}
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={css.button}>
        Make an Advertisement
      </button>
    </form>
  );
};

export default AdForm;
