"use client";

import Image from "next/image";
import React, { useState } from "react";

const Images = ({ data }: { data: Array<string> }) => {
  const [primaryImgIndex, setPrimaryImgIndex] = useState(0);

  const onNext = () => {
    setPrimaryImgIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  const onImageClick = (currentIndex: number) => {
    setPrimaryImgIndex(currentIndex);
  };

  return (
    <div>
      <Image
        src={data[primaryImgIndex]}
        width={200}
        height={200}
        alt={`image-${primaryImgIndex}`}
      />
      <div>
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
        <div onClick={onNext}>next</div>
      </div>
    </div>
  );
};

export default Images;
