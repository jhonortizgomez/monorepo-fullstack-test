import Image from "next/image"

export const CartProductCard = (props: Props) => {
  const { image, name, price } = props.product;
  console.log('image', image)
  
  return (
    <li className="flex items-center gap-4">
      <Image
        src={ image } 
        alt="Imagen del producto"
        className="size-16 rounded-sm object-cover"
        width={ 100 }
        height={ 100 }
      />

      <div>
        <h3 className="text-sm text-gray-900">{ name }</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">price:</dt>
            <dd className="inline">{ price }</dd>
          </div>
        </dl>
      </div>
    </li>
  )
}

type Props = {
  product: ProductType
}