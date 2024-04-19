import ProductDetail from "@/components/Products/ProductDetail";
import React from "react";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <ProductDetail id={id} />;
};

export default ProductPage;
