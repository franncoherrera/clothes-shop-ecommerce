"use client";
import clsx from "clsx";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return;
    onQuantityChanged(quantity + value);
  };
  return (
    <div className="flex">
      <button disabled={quantity === 1} onClick={() => onValueChanged(-1)}>
        <IoRemoveCircleOutline
          className={clsx("transition-all", {
            "opacity-50 cursor-not-allowed": quantity === 1,
          })}
          size={30}
        />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded justify-center h-[30px] flex items-center">
        {quantity}
      </span>
      <button onClick={() => onValueChanged(+1)}>
        <IoAddCircleOutline className="cursor-pointer" size={30} />
      </button>
    </div>
  );
};
