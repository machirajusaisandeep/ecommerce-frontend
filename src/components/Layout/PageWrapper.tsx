import React from "react";
import styles from "./layout.module.css";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.pageWrapper}>{children}</main>;
};

export default PageWrapper;
