import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.jpeg";
import { HiShoppingBag } from "react-icons/hi";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="flora_logo" />
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        <ul
          className={css.menu_ul}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" className={css.search} placeholder="Search" />
        <HiShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
