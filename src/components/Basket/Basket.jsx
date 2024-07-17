import React from "react";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import "./Basket.scss";
import { Link } from "react-router-dom";

function Basket() {
  return (
    <div className="basket">
      <div className="container">
        <div className="basket__content">
          <div className="basket__text">
            <Link to="/">
              <h3 style={{ color: "red" }}>Home</h3>
            </Link>
            <h3>/</h3>
            <h3>Basket</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            ratione eos cum nisi autem porro reiciendis, qui unde impedit
            nesciunt, accusantium recusandae fugit, quia voluptates esse? Porro
            hic laboriosam soluta saepe aut?
          </p>
          <div className="basket__total">
            <h2>
              Total: <span>1</span>
            </h2>
            <div className="basket__pop">
              <div className="basket__images-blocks">
                <div className="basket__images">
                  <img
                    src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
                    alt=""
                  />
                  <span>name</span>
                </div>
              </div>
              <h2>
                обший сумма: <span>3432</span> с
              </h2>
              <h3>готов заказать</h3>
            </div>
          </div>
          <div className="basket__block">
            <img
              src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
              alt=""
            />
            <h1>Name</h1>
            <h2>220 c</h2>
            <div className="basket__quentity">
              <FaMinus className="btn basket__min" />
              <span className="btn">1</span>
              <FaPlus className="btn basket__min" />
            </div>
            <div className="basket__quentity">
              <button>отменить</button>
              <button style={{ background: "green" }}>заказать</button>
            </div>
            <button className="basket__delete">удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
