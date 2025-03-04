
import { getProducts } from "@repo/core/backend/api/products"
import { ProductCard } from "../Cards/Product";

export const ProductList = async() => {
  const products = await getProducts();

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      { products.map((product: any) => {
        const { id, name, price } = product;
        
        return( 
          <ProductCard 
            key={ id }
            id={ id }
            name={ name }
            price={ price }
          />
        )
      })}
    </div>
  )
}