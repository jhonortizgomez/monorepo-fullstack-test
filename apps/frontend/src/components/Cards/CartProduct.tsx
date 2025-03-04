import Image from "next/image"

export const CartProductCard = () => {


  return (
    <li className="flex items-center gap-4">
      <Image
        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
        alt="Imagen del producto"
        className="size-16 rounded-sm object-cover"
        width={ 100 }
        height={ 100 }
      />

      <div>
        <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Size:</dt>
            <dd className="inline">XXS</dd>
          </div>

          <div>
            <dt className="inline">Color:</dt>
            <dd className="inline">White</dd>
          </div>
        </dl>
      </div>
    </li>
  )
}