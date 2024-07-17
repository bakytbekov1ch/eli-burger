import React, { useState } from "react";

import "./SectionOne.scss";

function SectionOne() {
  const [value, setValue] = useState();
  const [data, setData] = useState();

  function handleClick() {
    setValue(!value);
  }

  function dataClick() {
    setData(!data);
  }

  return (
    <div className="sectionone">
      <div className="container">
        <nav className="sectionone__nav">
          <ul>
            {value ? (
              <>
                <h3>Курманжан датка 34б</h3>
              </>
            ) : (
              <li onClick={() => handleClick()}>Бишкек</li>
            )}
            {data ? (
              <>
                <h3>Запатный 3</h3>
                <h3>Запатный 4</h3>
                <h3>Запатный 5</h3>
              </>
            ) : (
              <li onClick={() => dataClick()}>Ош</li>
            )}
            <li>Чүй</li>
            <li>Талас</li>
            <li>Нарын</li>
            <li>Баткен</li>
            <li>Ысык-Көл</li>
            <li>Жалал-Абад</li>
          </ul>

          <h1>
            <span>eli</span>.burger 7 областа...
          </h1>
        </nav>
      </div>
    </div>
  );
}

export default SectionOne;
