import React from "react";
import styles from "./layout.module.css";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <span>Shoe Shopper</span>
      <div>
        <button>
          <ShoppingBagIcon className={styles.cartIcon} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
