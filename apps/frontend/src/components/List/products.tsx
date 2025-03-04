"use client"
import { getProducts } from "@repo/core/backend/api/products";
import { ProductCard } from "../Cards/Product";
import { useBudgetStore } from "@repo/core/store/budget";
import { useCallback, useEffect, useState } from "react";
import { AddProductToCart } from "@repo/core/backend/api/cart";
import { useCartStore } from "@repo/core/store/cart";

export const ProductList = () => {
  const budget = useBudgetStore((state) => state.budget);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCartStore();

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const fetchedProducts = await getProducts(budget);
    setProducts(fetchedProducts);
    setLoading(false);
  }, [budget]);

  const addProductToCartEvent = async(product: ProductType) => {
    await AddProductToCart(product)
    addToCart(product)
  }

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((product) => {
        const { id, name, price } = product;

        return (
          <ProductCard key={id} id={id} name={name} price={price} onClick={ addProductToCartEvent }/>
        );
      })}
    </div>
  );
};