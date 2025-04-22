import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../Views/Auth";

function Routess() { 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/products/:id" element={<div>Product Details</div>} />
        <Route
          path="/products/:id/reviews"
          element={<div>Product Reviews</div>}
        />
      </Routes>
    </div>
  );
}

export default Routess;
