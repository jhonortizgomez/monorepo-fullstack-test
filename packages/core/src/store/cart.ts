import { create } from 'zustand'

type Store = {
  cart: any[]
  addToCart: (product: any) => void
}

export const useCartStore = create<Store>()((set) => ({
  cart: [],
  addToCart: (cartItem) => set((state) => ({ cart: [...state.cart, cartItem] })),
}))