import ProductList from "@/components/Products/ProductList";
import { DummyShoes } from "@/constants/DummyShoes";
import React from "react";

const ProductsPage = () => {
  return <ProductList title="Shoes" products={DummyShoes} />;
};

export default ProductsPage;
