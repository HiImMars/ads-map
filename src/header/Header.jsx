import React, { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import css from "./Header.module.css";

Notify.init({
  position: "rigth-top",
  timeout: 5000,
});

const Header = ({ ads, setFilteredAds }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    const filteredAds = ads.filter(
      (ad) => ad.city.toLowerCase().trim() === query
    );

    setFilteredAds(filteredAds);

    if (filteredAds.length > 0) {
      Notify.info(
        `There are ${filteredAds.length} advertisements in this city!`
      );
    } else {
      Notify.warning(
        `There are no advertisements in this city or you should enter a valid city name`
      );
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label} htmlFor="check">
          Check how many advertisements are in your city
        </label>
        <div>
          <input
            id="check"
            name="check"
            type="text"
            placeholder="Check ads"
            className={css.input}
            onChange={handleInputChange}
          />
          <button className={css.button}>Check</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
