import React from "react";
import CartProductCard from "./CartProductCard";
import { DummyShoes } from "@/constants/DummyShoes";

const Cart = () => {
  return (
    <div>
      <CartProductCard
        {...DummyShoes[0]}
        noOfItems={1}
        totalItemPrice={199}
        isCouponApplied={false}
      />
    </div>
  );
};

export default Cart;
