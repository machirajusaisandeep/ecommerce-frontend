import React from "react";
import GeneralDetails from "./GeneralDetails";
import { DummyShoes } from "@/constants/DummyShoes";
import Images from "./Images";
import styles from "./productDetail.module.css";

type GeneralDetails = {
  id: string;
};

const ProductDetail = (props: GeneralDetails) => {
  const product = DummyShoes[0];

  return (
    <div className={styles.wrapper}>
      <Images data={product.images} />
      <GeneralDetails {...product} />
    </div>
  );
};

export default ProductDetail;
