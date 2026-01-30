'use client';
import { useCartStore } from '@/store';
import { currecyFormat } from '@/utils';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false);
  const { subTotal, tax, total, itemsInCart } = useCartStore(
    useShallow((state) => state.getSummaryInformation())
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Cargando...</p>;
  return (
    <div className="grid grid-cols-2">
      <span>Cantidad de productos</span>
      <span className="text-right">
        {itemsInCart === 1 ? '1 artículos' : `${itemsInCart} artículos`}
      </span>
      <span>Subtotal</span>
      <span className="text-right">{currecyFormat(subTotal)}</span>
      <span>Impuestos (15%)</span>
      <span className="text-right">{currecyFormat(tax)}</span>
      <span className="text-2xl mt-5">Total</span>
      <span className="text-right text-2xl mt-5">{currecyFormat(total)}</span>
    </div>
  );
};
