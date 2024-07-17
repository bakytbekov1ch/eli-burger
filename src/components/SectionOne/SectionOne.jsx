import React, { useEffect, useState } from "react";

import { addressBtn } from "../../data/address";

import { IoLocationOutline } from "react-icons/io5";

import "./SectionOne.scss";

function SectionOne() {
  const [value, setValue] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setValue(addressBtn);
    setData([...new Set(addressBtn.map((item) => item.category))]);
  }, []);

  const get__filter = (str) => {
    const filterData = addressBtn.filter((item) => item.category === str);
    setValue(filterData);
  };

  return (
    <div className="sectionone">
      <div className="container">
        <nav className="sectionone__nav">
          <ul>
            {data.map((item, index) => (
              <li key={index} onClick={() => get__filter(item)}>
                {item}
              </li>
            ))}
            <li onClick={() => setValue(addressBtn)}>Clear</li>
          </ul>
        </nav>
        <div className="sectionone__data">
          {value.map((item) => (
            <div key={item.id} className="data__location">
              <IoLocationOutline />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
