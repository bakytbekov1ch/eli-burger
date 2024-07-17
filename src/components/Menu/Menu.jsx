import React, { useEffect, useState } from "react";

import { BsCircleFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";

import "./Menu.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const mocApi = "https://669366b5c6be000fa07b6234.mockapi.io/eli-burger";

function Menu() {
  const [burger, setBurger] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(mocApi);

      console.log(res);
      setBurger(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__content">
          <div className="menu__nav">
            <div className="menu__xl">
              <h1>
                <MdRestaurantMenu className="menu__menu" />
                Menu
                <MdRestaurantMenu className="menu__menu" />
              </h1>
              <ul>
                <li>
                  <div className="menu__css">
                    <BsCircleFill className="menu__icon" />
                    Шаурма
                  </div>
                  <span>+</span>
                </li>
                <li>
                  <div className="menu__css">
                    <BsCircleFill className="menu__icon" />
                    Бургер
                  </div>
                  <span>+</span>
                </li>
                <li>
                  <div className="menu__css">
                    <BsCircleFill className="menu__icon" />
                    Комбо
                  </div>
                  <span>+</span>
                </li>
                <li>
                  <div className="menu__css">
                    <BsCircleFill className="menu__icon" />
                    KFS
                  </div>
                  <span>+</span>
                </li>
                <li>
                  <div className="menu__css">
                    <BsCircleFill className="menu__icon" />
                    Питца
                  </div>
                  <span>+</span>
                </li>
                <li>
                  <div className="menu__css">
                    <BsCircleFill className="menu__icon" />
                    Суши
                  </div>
                  <span>+</span>
                </li>
                <li>
                  <div className="menu__css">
                    <BsCircleFill className="menu__icon" />
                    Напиток
                  </div>
                  <span>+</span>
                </li>
              </ul>
              <p>
                Welcome to <br />
                <span>eli</span>.burger
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <textarea name="#" id="" placeholder="Отзыв"></textarea>
              <input type="text" placeholder="Ваше имя" />
              <button>submit</button>
            </div>
          </div>
          <div className="menu__block">
            <div className="menu__filter">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

              <Link to="/basket">
                <IoAddCircleOutline className="menu__pilus" />
              </Link>
            </div>
            <div className="menuMocApi">
              {burger.map((item, index) => (
                <div key={index} className="menu__product">
                  <img src={item.image} alt="image" />
                  <Link to="/product">
                    <button className="manu__buton">просмотреть</button>
                  </Link>
                  <div className="menu__mx">
                    <h3>{item.name}</h3>
                    <h4>{item.price} с</h4>
                    <div className="menu__buttons">
                      <Link to="/basket">
                        <button className="btn button-blue">корзина</button>
                      </Link>
                      <button className="btn button-red">заказать</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
