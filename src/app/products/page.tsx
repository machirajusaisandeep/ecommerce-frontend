import ProductList from "@/components/Products/ProductList";
import { DummyShoes } from "@/constants/DummyShoes";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <ProductList title="Shoes" products={DummyShoes} />
    </div>
  );
};

export default ProductsPage;
