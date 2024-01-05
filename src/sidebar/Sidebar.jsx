import React, { useEffect, useState } from "react";
import { getAds } from "../services";
import SidebarItem from "../sidebarItem/SidebarItem";

const Sidebar = ({ setSelectedAd, updateAds, selectedAd }) => {
  const [ads, setAds] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loaded) {
          const response = await getAds();
          setAds(response.data);
          setLoaded(true);
          updateAds(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [loaded, updateAds]);

  return (
    <>
      <h2>Advertisements</h2>
      <ul>
        {ads.map(({ title, price, image, id }) => (
          <SidebarItem
            key={id}
            title={title}
            price={price}
            image={image}
            isSelected={selectedAd && selectedAd.id === id}
            onSelect={() => setSelectedAd({ id, title, price, image })}
          />
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
