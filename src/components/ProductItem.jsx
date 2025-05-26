import React from "react";
import ProductDetail from "./ProductDetail";

const ProductItem = ({ product }) => {
  return (
    <div>
      <h1>Displaying product item</h1>
      {/* <section>
        <h3>{product.name}</h3>
        <h6>{product.price}</h6>
        <p>{product.description}</p>
      </section> */}
      <ProductDetail
        name={product.name}
        price={product.price}
        desc={product.description}
      />
    </div>
  );
};

export default ProductItem;
