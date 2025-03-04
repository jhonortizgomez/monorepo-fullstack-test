import { useCartStore } from "@repo/core/store/cart";
import Image from "next/image";

export const ProductCard = (props: Props) => {
  const { product,  onClick } = props;
  const { image, name, price, id } = product;
  const { cart } = useCartStore();

  const isProductInCart = cart.find((product) => product.id === id)

  const addToCartEvent = () => onClick(product)

  return (
    <a className="relative block rounded-tr-3xl border border-gray-100 w-2xs">
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
        {`$ ${ price }`}
      </span>

      <Image
        src={ image }
        alt="imagen del prooducto"
        className="h-80 w-full rounded-tr-3xl object-cover"
        width={ 300 }
        height={ 300 }
      />

      <div className="p-4 text-center">
        <strong className="text-xl text-white font-bold"> { name } </strong>
        <p className="mt-2 text-pretty text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
          eum vitae aliquid at sed dignissimos.
        </p>

        <button type="button" 
          onClick={isProductInCart ? () => null : addToCartEvent }
          className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
          {isProductInCart ? "Agregado" : "Agregar al carrito" }
        </button>
      </div>
    </a>
  )
}

type Props = {
  product: ProductType
  onClick: (product: ProductType) => void
}