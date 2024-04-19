"use client";

import { Shoe } from "@/types/Shoe";
import Image from "next/image";
import React from "react";
import styles from "./products.module.css";
import { useRouter } from "next/navigation";

const ProductCard = (props: Shoe) => {
  const router = useRouter();

  const { modelName, price, images, colors, material } = props;
  const primaryImage = images ? images[0] : "";

  const openProduct = () => {
    router.push("/products/1");
  };

  return (
    <div className={styles.productCard} onClick={openProduct}>
      <Image
        className={styles.productImage}
        src={primaryImage}
        alt={modelName}
        width={200}
        height={200}
      />
      <p className={styles.title}>{modelName}</p>
      <div className={styles.otherDetails}>
        <span>{colors?.length}</span>
        <span>{material}</span>
      </div>
      <span className={styles.price}>₹{price}</span>
    </div>
  );
};

export default ProductCard;
