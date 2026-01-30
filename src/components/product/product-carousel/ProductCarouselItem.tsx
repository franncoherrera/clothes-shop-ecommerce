import { ImageHoverEffect } from "@/components/common/ImageHoverEffect";
import { titleFont } from "@/config/fonts";
import { Product } from "@/interfaces";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductCarouselItem = ({ product }: Props) => {
  const productRoute: string = `/product/${product.slug}`;
  return (
    <div className="max-w-2xl mx-auto">
      <div className="max-w-[250px] shadow-md rounded-lg bg-white">
        <ImageHoverEffect
          productImages={product.images}
          productSlug={product.slug}
          productTitle={product.title}
          imageClassName="rounded-t-lg p-2 md:p-4"
        />
        <div className="px-5 py-5">
          <Link href={productRoute}>
            <h3
              className={`${titleFont.className} antialiased font-semibold text-gray-900 text-sm tracking-tight min-h-15`}
            >
              {product.title}
            </h3>
          </Link>
          <div className="flex items-center justify-center py-4">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>
        </div>
        <Link href={productRoute}>
          <span className="text-sm block w-full bg-blue-600 hover:bg-blue-800 text-white rounded-bl rounded-br transition-all p-2">
            Comprar
          </span>
        </Link>
      </div>
    </div>
  );
};
