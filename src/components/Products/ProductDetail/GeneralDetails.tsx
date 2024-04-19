import { Shoe } from "@/types/Shoe";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import styles from "./productDetail.module.css";

const GeneralDetails = (props: Shoe) => {
  const { name, price, colors, material } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>₹{price}</p>
      <p>
        <span>{colors?.length} </span>
        colours available
      </p>
      <div className={styles.actions}>
        <button>Add to Cart</button>
        <button>
          <HeartIcon />
        </button>
      </div>
    </div>
  );
};

export default GeneralDetails;
