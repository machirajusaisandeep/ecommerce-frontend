import { Shoe } from "@/types/Shoe";
import React from "react";

const ProductCard = (props: Shoe) => {
  const { name } = props;
  return <div>{name}</div>;
};

export default ProductCard;
