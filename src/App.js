import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import Basket from "./components/Basket/Basket";
import Product from "./components/Product/Product";
import SectionOne from "./components/SectionOne/SectionOne";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sectionone" element={<SectionOne />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
