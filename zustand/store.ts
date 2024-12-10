import { create } from "zustand";

export const useStore : any = create((set) => ({
  cart: [
    {
      id: 0,
      name: "shirt",
    },
  ],
  addToCart: (cart: any) =>
    set((store: any) => ({ cart: [...store.cart, cart] })),
}));
