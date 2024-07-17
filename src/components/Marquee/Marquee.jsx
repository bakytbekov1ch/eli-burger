import React from "react";

import Marquee from "react-fast-marquee";

import { margueeMocApi } from "../../data/marquee";

import "./Marquee.scss";

function MarqueeBtn() {
  return (
    <div className="marguee">
      <div className="marquee__content">
        <Marquee>
          {margueeMocApi.map((item) => (
            <img src={item.image} alt="" />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeBtn;
