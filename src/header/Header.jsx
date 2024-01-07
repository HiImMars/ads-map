import React from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import css from "./Header.module.css";

Notify.init({
  position: "center-top",
  timeout: 5000,
});

const Header = ({ ads }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkCity = e.target.elements.check.value;

    const filteredAds = ads.filter(
      (ad) => ad.city.toLowerCase().trim() === checkCity.toLowerCase().trim()
    );
    if (filteredAds.length > 0) {
      Notify.info(
        `There are ${filteredAds.length} advertisements in this city!`
      );
    } else {
      Notify.warning(`There are no advertisements in this city!`);
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
            required
          />
          <button className={css.button}>Check</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
