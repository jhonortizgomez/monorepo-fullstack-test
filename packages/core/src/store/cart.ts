import { create } from 'zustand'
import { ProductType } from '../types'

type Store = {
  cart: ProductType[]
  addToCart: (product: ProductType) => void
}

export const useCartStore = create<Store>()((set) => ({
  cart: [],
  addToCart: (cartItem) => set((state) => ({ cart: [...state.cart, cartItem] })),
}))