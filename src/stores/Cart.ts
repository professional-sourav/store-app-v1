import { create } from "zustand";
import { Product } from "../types/Product";

export const useStore = create((set) => ({
    items: [],
    total: 0,
    addItem: (item: Product) => set((state: any) => ({ items: [...state.items, item] })),
    removeItem: (item: Product) => set((state: any) => ({ items: state.items.filter((i: Product) => i.id !== item.id) })),
}))
