"use client";
import { useCartStore } from "@/store";
import Image from "next/image";
import { QuantitySelector } from "../quantity-selector/QuantitySelector";
import { useEffect, useState } from "react";
import Link from "next/link";

export const ProductsInCart = () => {
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity,
  );
  const [loaded, setLoaded] = useState(false);
  const productInCart = useCartStore((state) => state.cart);
  const removeProduct = useCartStore((state) => state.removeProduct);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div className="animate-pulse bg-gray-200 flex h-100"></div>;
  }

  return (
    <>
      {productInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5 ">
          <Image
            style={{
              width: "100px",
              height: "100px",
            }}
            src={`/products/${product.image}`}
            width={100}
            height={100}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.slug}`}
            >
              <p>
                {product.size} - {product.title}
              </p>
            </Link>
            <p>${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={(quantity) =>
                updateProductQuantity(product, quantity)
              }
            />
            <button
              onClick={() => removeProduct(product)}
              className="underline mt-3 cursor-pointer"
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
