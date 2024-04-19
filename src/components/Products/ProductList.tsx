import ProductCard from "@/components/Products/ProductCard";
import React from "react";
import styles from "./products.module.css";
import { Shoe } from "@/types/Shoe";

type ProductListProps = {
  title: string;
  products: Array<Shoe>;
};

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div>
      <h2 className={styles.productListTitle}>{title}</h2>
      <div className={styles.productList}>
        {products?.map((product, index) => {
          return <ProductCard {...product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
