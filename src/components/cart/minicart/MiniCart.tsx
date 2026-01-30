import { ProductsInCart } from "@/components/product/products-in-cart/ProductsInCart";
import { titleFont } from "@/config/fonts";
import { useCartStore } from "@/store";
import Link from "next/link";

export const MiniCart = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItemQuantityCart = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalItemPriceCart = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {cart.length ? (
        <div className="absolute top-[102px] right-[0] z-[2] bg-white w-[450px] h-[420px] max-h-[420px] overflow-y-auto border border-gray-400 shadow-sm">
          <div className={`${titleFont.className} flex flex-col antialiased`}>
            <Link
              href={"/cart"}
              className="text-sm w-full bg-blue-600 hover:bg-blue-800 text-white transition-all p-2 mb-4 cursor-pointer justify-center flex"
            >
              Ver Carro
            </Link>
            <section className="px-4 flex flex-col">
              <div className="flex justify-between pb-2">
                <span>Total productos </span>
                <span className="font-bold">
                  {totalItemQuantityCart} artículos
                </span>
              </div>
              <div className="flex justify-between  gap-5">
                <span>Total </span>
                <span className="font-bold">${totalItemPriceCart}</span>
              </div>
            </section>
            <div className="w-full h-px bg-gray-200 my-4"></div>
          </div>
          <div className={`${titleFont.className} px-4 antialiased mb-4`}>
            Lista de productos
          </div>
          <ProductsInCart />
        </div>
      ) : (
        <div className="absolute top-[102px] right-[0] z-[2] bg-white w-[450px]  max-h-[420px] overflow-y-auto border border-gray-400 shadow-sm">
          <div className={`${titleFont.className} flex flex-col antialiased`}>
            <section className="px-4 flex justify-center m-5">
              No tienes productos agregados al carro
            </section>
          </div>
        </div>
      )}
    </>
  );
};
