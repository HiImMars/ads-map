import React from "react";

const SidebarItem = ({ title, image, price, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <li className={isSelected ? "selected" : ""} onClick={handleClick}>
      <img src={image} alt="coffee machine" width="200px" height="100px" />
      <h3>{title}</h3>
      <p>{price}</p>
    </li>
  );
};

export default SidebarItem;
