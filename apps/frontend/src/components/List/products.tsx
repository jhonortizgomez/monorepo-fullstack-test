"use client"
import { getProducts } from "@repo/core/backend/api/products";
import { ProductCard } from "../Cards/Product";
import { useBudgetStore } from "@repo/core/store/budget";
import { useCallback, useEffect, useState } from "react";
import { AddProductToCart } from "@repo/core/backend/api/cart";
import { useCartStore } from "@repo/core/store/cart";

export const ProductList = () => {
  const { budget, updateBudget } = useBudgetStore();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCartStore();

  const updateBudgetEvent = () => updateBudget(undefined)

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
    <>
      {products.length ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {products.map((product) => {
            return (
              <ProductCard
                key={ product.id }
                product={ product }
                onClick={ addProductToCartEvent }
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center text-center gap-5">
          <h2>Ups no hay producto para tu presupuesto</h2>
          <button
            onClick={updateBudgetEvent}
            className="group relative inline-block focus:ring-3 focus:outline-hidden">
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase">
              Mostrar todos los productos
            </span>
          </button>
        </div>
      )}
    </>
  );
};