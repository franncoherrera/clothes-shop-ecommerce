"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  productImages: string[];
  productTitle: string;
  productSlug: string;
  imageClassName?: string;
}

export const ImageHoverEffect = ({
  productImages,
  productTitle,
  productSlug,
  imageClassName,
}: Props) => {
  const [displayImage, setDisplayImage] = useState(productImages[0]);

  return (
    <Link href={`/product/${productSlug}`}>
      <Image
        src={`/products/${displayImage}`}
        alt={productTitle}
        className={`w-full object-cover rounded-md transition-transform duration-300 ${imageClassName}`}
        width={500}
        height={500}
        onMouseEnter={() => setDisplayImage(productImages[1])}
        onMouseLeave={() => setDisplayImage(productImages[0])}
      />
    </Link>
  );
};
