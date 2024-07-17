import React from "react";

import { IoSearch } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { SiGoogletranslate } from "react-icons/si";
import { SlBasket } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";

import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <h1>
              eli<span>.burger</span>
            </h1>
          </Link>

          <div className="header__block">
            <div className="header__btn">
              <input type="text" placeholder="Напишите товар" />
              <IoSearch className="header__search" />
            </div>
            <IoSunnySharp className="header__sun" />
            <BsMoonStarsFill className="header__moon" />
            <SiGoogletranslate className="header__trans" />
            <Link to="sectionone">
              <SlLocationPin className="header__basket" />
            </Link>

            <Link to="/basket">
              <SlBasket className="header__basket" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
