import React, { useState } from "react";
import ProductItem from "./ProductItem";

const Shop = () => {
  let [product, setProduct] = useState({
    name: "product1",
    price: "10000",
    description: "8GB RAM",
  });
  return (
    <div>
      <h1>Welcome to my shop</h1>
      <ProductItem product={product} />
    </div>
  );
};

export default Shop;
