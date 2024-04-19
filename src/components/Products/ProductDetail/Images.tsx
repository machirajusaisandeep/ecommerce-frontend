"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import styles from "./productDetail.module.css";

const Images = ({ data }: { data: Array<string> }) => {
  const [primaryImgIndex, setPrimaryImgIndex] = useState(0);

  const onNext = () => {
    setPrimaryImgIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  const onImageClick = (currentIndex: number) => {
    setPrimaryImgIndex(currentIndex);
  };

  return (
    <div className={styles.sectionWrapper}>
      <Image
        src={data[primaryImgIndex]}
        width={200}
        height={200}
        alt={`image-${primaryImgIndex}`}
        className={styles.primaryImage}
      />
      <div className={styles.secondary}>
        {data?.map((src, index) => {
          return primaryImgIndex != index ? (
            <Image
              src={src}
              key={index}
              width={200}
              height={200}
              alt={`image-${index}`}
              onClick={() => onImageClick(index)}
            />
          ) : null;
        })}
        <button className={styles.nextButton} onClick={onNext}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Images;
