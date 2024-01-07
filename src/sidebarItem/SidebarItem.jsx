import React from "react";
import css from "./SidebarItem.module.css";

const SidebarItem = ({ title, image, price, city, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <li
      className={isSelected ? `selected ${css.listItem}` : css.listItem}
      onClick={handleClick}
    >
      <img
        src={image}
        alt="coffee machine"
        width="200px"
        height="100px"
        className={css.image}
      />
      <h3 className={css.title}>{title}</h3>
      <p className={css.price}>{price} UAH</p>
      <p className={css.city}>{city}</p>
    </li>
  );
};

export default SidebarItem;
