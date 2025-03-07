"use client"
import Image from "next/image"
import { CartProductsList } from "../List/CartProducts"
import { useCartStore } from "@repo/core/store/cart"

export const Cart = () => {
  const { isCartOpen, handleCart } = useCartStore();
  const handleCartEvent = () => handleCart(!isCartOpen)

  return (
    <div
      className={`${isCartOpen ? "block" : "hidden"} absolute z-10 right-0 top-[-56] w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 mt-30 sm:px-6 lg:px-8`}
      aria-modal="true"
      role="dialog">
      <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110" onClick={ handleCartEvent }>
        <Image src={"/icons/close.svg"} width={ 20 } height={ 20 } alt="Cerrar"/>
      </button>
      <h2 className="text-black font-medium text-2xl">Tu Carrito</h2>
      <div className="mt-4 space-y-6">
        <CartProductsList />

        <button className="space-y-4 text-center" type="button" onClick={ handleCartEvent }>
          <a
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600">
            Seguir comprando
          </a>
        </button>
      </div>
    </div>
  )
}