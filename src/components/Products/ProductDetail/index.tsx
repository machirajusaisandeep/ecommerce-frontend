import React from "react";
import Images from "./Images";
import GeneralDetails from "./GeneralDetails";
import { DummyShoes } from "@/constants/DummyShoes";

type GeneralDetails = {
  id: string;
};

const ProductDetail = (props: GeneralDetails) => {
  const product = DummyShoes[0];

  return (
    <div>
      <Images data={product.images} />
      <GeneralDetails />
    </div>
  );
};

export default ProductDetail;
