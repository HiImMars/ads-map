import React from "react";
import SidebarItem from "../sidebarItem/SidebarItem";

const Sidebar = ({ setSelectedAd, ads, selectedAd }) => {
  return (
    <>
      <h2>Advertisements</h2>
      <ul>
        {ads.map(({ title, price, image, id, city }) => (
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
    </>
  );
};

export default Sidebar;
