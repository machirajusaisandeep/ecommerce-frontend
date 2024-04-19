import { Shoe } from "@/types/Shoe";
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import styles from "./productDetail.module.css";

const GeneralDetails = (props: Shoe) => {
  const { name, price, colors, material } = props;
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.details}>
        <h1>{name}</h1>
        <p>₹{price}</p>
        <p>
          <span>{colors?.length} </span>
          colours available
        </p>
        <p>Material : {material}</p>
      </div>

      <button className={styles.addToCart}>
        <ShoppingBagIcon /> Add to Cart
      </button>
    </div>
  );
};

export default GeneralDetails;
