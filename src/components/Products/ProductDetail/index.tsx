import React from "react";
import GeneralDetails from "./GeneralDetails";
import { DummyShoes } from "@/constants/DummyShoes";

type GeneralDetails = {
  id: string;
};

const ProductDetail = (props: GeneralDetails) => {
  const product = DummyShoes[0];

  return (
    <div>
      {/* <Images data={product.images} /> */}
      <GeneralDetails {...product} />
    </div>
  );
};

export default ProductDetail;
