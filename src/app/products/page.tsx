import ProductCard from "@/components/Products/ProductCard";
import { DummyShoes } from "@/constants/DummyShoes";
import React from "react";

const ProductsPage = () => {
  const dummyProducts = DummyShoes;
  return (
    <div>
      {dummyProducts.map((product, index) => {
        return <ProductCard {...product} key={index} />;
      })}
    </div>
  );
};

export default ProductsPage;
