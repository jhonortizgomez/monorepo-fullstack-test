"use client"

import { useCartStore } from "@repo/core/store/cart"
import Image from "next/image";

export const HandleCart = () => {
  const { handleCart, isCartOpen } = useCartStore();

  const handdleCartEvent = () => {
    handleCart(!isCartOpen)
  }

  return (
    <button 
      className="sm:flex sm:gap-4 block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" onClick={ handdleCartEvent } type="button" >
        <Image src={"/icons/cart.svg"} alt="Carrtito" width={ 24 } height={ 24 }  /> 
    </button>
  )
}