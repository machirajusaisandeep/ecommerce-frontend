import ItemCounter from "@/common/ItemCounter/ItemCounter";
import { CartProduct } from "@/types/Cart";
import Image from "next/image";
import React from "react";

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
    <div>
      <Image src={images[0]} alt={modelName} width={64} height={64} />
      <div>
        <h2>{modelName}</h2>
        <span>{material}</span>
      </div>
      <ItemCounter />
    </div>
  );
};

export default CartProductCard;
