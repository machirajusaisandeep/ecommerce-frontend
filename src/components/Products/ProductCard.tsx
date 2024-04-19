"use client";

import { Shoe } from "@/types/Shoe";
import Image from "next/image";
import React from "react";
import styles from "./products.module.css";

const ProductCard = (props: Shoe) => {
  const { name, price, images, colors, material } = props;
  const primaryImage = images ? images[0] : "";

  const openProduct = () => {};

  return (
    <div className={styles.productCard} onClick={openProduct}>
      <Image
        className={styles.productImage}
        src={primaryImage}
        alt={name}
        width={200}
        height={200}
      />
      <p className={styles.title}>{name}</p>
      <div className={styles.otherDetails}>
        <span>{colors?.length}</span>
        <span>{material}</span>
      </div>
      <span className={styles.price}>₹{price}</span>
    </div>
  );
};

export default ProductCard;
