import React from "react";
import SidebarItem from "../sidebarItem/SidebarItem";
import css from "./Sidebar.module.css";

const Sidebar = ({ setSelectedAd, ads, selectedAd, filteredAds }) => {
  return (
    <aside className={css.ads}>
      <h2 className={css.title}>Advertisements</h2>
      <ul className={css.list}>
        {filteredAds.length > 0
          ? filteredAds.map(({ title, price, image, id, city }) => (
              <SidebarItem
                key={id}
                title={title}
                price={price}
                image={image}
                city={city}
                isSelected={selectedAd && selectedAd.id === id}
                onSelect={() => setSelectedAd({ id, title, price, image })}
              />
            ))
          : ads.map(({ title, price, image, id, city }) => (
              <SidebarItem
                key={id}
                title={title}
                price={price}
                image={image}
                city={city}
                isSelected={selectedAd && selectedAd.id === id}
                onSelect={() => setSelectedAd({ id, title, price, image })}
              />
            ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
