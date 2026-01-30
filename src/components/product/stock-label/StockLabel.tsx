"use client";
import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h2
          className={`${titleFont.className} antialiased font-bold text-lg animate-pulse bg-gray-200`}
        >
          &nbsp;
        </h2>
      ) : (
        <h2 className={`${titleFont.className} antialiased font-bold text-lg`}>
          {stock > 0 ? (
            <span className="text-green-600">Stock disponible</span>
          ) : (
            <span className="text-red-500">Sin stock</span>
          )}
        </h2>
      )}
    </>
  );
};
