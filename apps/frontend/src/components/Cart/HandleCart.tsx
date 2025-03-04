"use client";

import { useCartStore } from "@repo/core/store/cart";
import Image from "next/image";

export const HandleCart = () => {
  const { handleCart, isCartOpen, cart } = useCartStore();

  const handdleCartEvent = () => {
    handleCart(!isCartOpen);
  };

  return (
    <button
      className="sm:flex sm:gap-4 block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 relative"
      onClick={handdleCartEvent}
      type="button"
    >
      <Image src={"/icons/cart.svg"} alt="Carrtito" width={24} height={24} />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {cart.length}
        </span>
      )}
    </button>
  );
};