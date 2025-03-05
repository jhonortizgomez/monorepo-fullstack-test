import { getProductsCart } from "@repo/core/backend/api/cart"
import { useEffect, useState } from "react";
import { CartProductCard } from "../Cards/CartProduct";
import { useCartStore } from "@repo/core/store/cart";

export const CartProductsList = () => {
    const [productsCart, setProductsCart] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    const { cart, emptyCart, updateCart } = useCartStore();
  
    const fetchProducts = async () => {
      setLoading(true);
			emptyCart();
      const fetchedProducts = await getProductsCart();
			updateCart(fetchedProducts);
      setLoading(false);
    };
  
    useEffect(() => { fetchProducts(); }, []);
    useEffect(() => { setProductsCart(cart); }, [cart]);
  
    if (loading) {
      return <p className="text-black">Cargando productos...</p>;
    }

  return (
    <ul className="space-y-4">
      {productsCart.map((product: ProductType) => {
        return (
          <CartProductCard key={ product.id } product={ product }/>
        );
      })}
    </ul>
  )
}