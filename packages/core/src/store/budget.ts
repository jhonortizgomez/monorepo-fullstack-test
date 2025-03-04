import { create } from 'zustand'

type Store = {
  budget?: number;
  updateBudget: (productsUpdated?: number) => void
}

export const useBudgetStore = create<Store>()((set) => ({
  budget: undefined,
  updateBudget: (newBudget) => set(() => ({ budget: newBudget })),
}))