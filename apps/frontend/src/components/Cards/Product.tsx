export const ProductCard = (props: Props) => {
  const { id, name, price, onClick } = props;

  const product = { id, name, price, image: "" }

  return (
    <a href="#" className="relative block rounded-tr-3xl border border-gray-100 w-2xs">
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
        {`$ ${ price }`}
      </span>

      <img
        src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-80 w-full rounded-tr-3xl object-cover"
      />

      <div className="p-4 text-center">
        <strong className="text-xl text-white font-bold"> { name } </strong>
        <p className="mt-2 text-pretty text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
          eum vitae aliquid at sed dignissimos.
        </p>

        <span 
          onClick={ () => onClick(product) }
          className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
          Agregar al carrito
        </span>
      </div>
    </a>
  )
}

type Props = {
  id: number;
  name: string;
  price: number;
  onClick: (product: ProductType) => void
}