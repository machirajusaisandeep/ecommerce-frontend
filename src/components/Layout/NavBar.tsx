"use client";

import React from "react";
import styles from "./layout.module.css";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/products/");
  };

  const goToCart = () => {
    router.push("/cart/");
  };

  return (
    <div className={styles.navBar}>
      <span onClick={goToHome}>Shoe Shopper</span>
      <button onClick={goToCart}>
        <ShoppingBagIcon className={styles.cartIcon} />
      </button>
    </div>
  );
};

export default NavBar;
