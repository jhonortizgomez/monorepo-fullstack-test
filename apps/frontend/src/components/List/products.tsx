"use client"
import { getProducts } from "@repo/core/backend/api/products";
import { ProductCard } from "../Cards/Product";
import { useBudgetStore } from "@repo/core/store/budget";
import { useEffect, useState } from "react";
import { AddProductToCart } from "@repo/core/backend/api/cart";
import { useCartStore } from "@repo/core/store/cart";

export const ProductList = () => {
  const budget = useBudgetStore((state) => state.budget);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCartStore();

  const fetchProducts = async () => {
    setLoading(true);
    const fetchedProducts = await getProducts(budget);
    setProducts(fetchedProducts);
    setLoading(false);
  };

  const addProductToCartEvent = async(product: any) => {
    await AddProductToCart(product)
    addToCart(product)
  }

  useEffect(() => { fetchProducts(); }, [budget]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((product: any) => {
        const { id, name, price } = product;

        return (
          <ProductCard key={id} id={id} name={name} price={price} onClick={ addProductToCartEvent }/>
        );
      })}
    </div>
  );
};