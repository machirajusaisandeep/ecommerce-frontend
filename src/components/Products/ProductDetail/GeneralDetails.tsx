import { Shoe } from "@/types/Shoe";
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import styles from "./productDetail.module.css";

const GeneralDetails = (props: Shoe) => {
  const { modelName, brandName, price, colors, material, sizes, skuId } = props;
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.details}>
        <span>{brandName}</span>
        <h1>{modelName}</h1>
        <p>₹{price}</p>
        <p>
          <span>{colors?.length} </span>
          colours available
        </p>
        <p>Material : {material}</p>
        <p>
          Size :{" "}
          {sizes.map((size, i) => (
            <span key={i}>{size} </span>
          ))}
        </p>
      </div>

      <button className={styles.addToCart}>
        <ShoppingBagIcon /> Add to Cart
      </button>
    </div>
  );
};

export default GeneralDetails;
