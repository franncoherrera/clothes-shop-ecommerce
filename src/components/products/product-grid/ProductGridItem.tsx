import { ImageHoverEffect } from "@/components/common/ImageHoverEffect";
import { Product } from "@/interfaces";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <ImageHoverEffect
        productImages={product.images}
        productSlug={product.slug}
        productTitle={product.title}
      />

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};
