import ItemCounter from "@/common/ItemCounter/ItemCounter";
import { CartProduct } from "@/types/Cart";
import Image from "next/image";
import React from "react";
import styles from "./cart.module.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartProductCard = (props: CartProduct) => {
  const {
    modelName,
    price,
    images,
    colors,
    material,
    noOfItems,
    totalItemPrice,
  } = props;

  return (
    <div className={styles.CartProductWrap}>
      <Image src={images[0]} alt={modelName} width={64} height={64} />
      <div className={styles.itemDetails}>
        <h2>{modelName}</h2>
        <span>{material}</span>
      </div>
      <div className={styles.itemActions}>
        <span>{price}</span>
        <ItemCounter />
        <button className={styles.deleteBtn}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
