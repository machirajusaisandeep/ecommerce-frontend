import React from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import styles from "./styles.module.css";

const ItemCounter = () => {
  return (
    <div className={styles.counterWrap}>
      <button className={styles.counterActionBtn}>
        <MinusIcon />
      </button>
      <input type="number" />
      <button className={styles.counterActionBtn}>
        <PlusIcon />
      </button>
    </div>
  );
};

export default ItemCounter;
