import React from "react";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>{id}</div>;
};

export default ProductPage;
