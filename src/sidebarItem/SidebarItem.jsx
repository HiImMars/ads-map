import React from "react";

const SidebarItem = ({ title, image, price, city, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <li className={isSelected ? "selected" : ""} onClick={handleClick}>
      <img src={image} alt="coffee machine" width="200px" height="100px" />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{city}</p>
    </li>
  );
};

export default SidebarItem;
