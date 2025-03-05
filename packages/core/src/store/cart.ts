import { create } from 'zustand'
import { ProductType } from '../types'

type Store = {
  cart: ProductType[];
  isCartOpen: boolean;
  addToCart: (product: ProductType) => void;
  handleCart: (isOpen: boolean) => void;
  updateCart: (products: ProductType[]) => void;
  emptyCart: () => void;
}

export const useCartStore = create<Store>()((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (cartItem) => set((state) => ({ cart: [...state.cart, cartItem] })),
  updateCart: (products) => set(() => ({ cart: products })),
  handleCart: (isOpen) => set(() => ({ isCartOpen: isOpen })),
  emptyCart: () => set(() => ({ cart: [] })),
}))