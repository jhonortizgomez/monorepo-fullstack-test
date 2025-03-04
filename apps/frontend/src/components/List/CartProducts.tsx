import { getProductsCart } from "@repo/core/backend/api/cart"
import { useEffect, useState } from "react";
import { CartProductCard } from "../Cards/CartProduct";
import { useCartStore } from "@repo/core/store/cart";

export const CartProductsList = () => {
    const [productsCart, setProductsCart] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    const { cart } = useCartStore();
  
    const fetchProducts = async () => {
      setLoading(true);
      const fetchedProducts = await getProductsCart();
      setProductsCart(fetchedProducts);
      setLoading(false);
    };
  
    useEffect(() => { fetchProducts(); }, [cart]);
  
    if (loading) {
      return <p>Cargando productos...</p>;
    }

  return (
    <ul className="space-y-4">
      {productsCart.map((product: ProductType) => {
        const { id, name, price } = product;

        return (
          <CartProductCard key={id} />
        );
      })}
    </ul>
  )
}