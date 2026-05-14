import { create } from "zustand";

export interface CartItem {
  name: string;
  isVeg: boolean;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: { name: string; isVeg: boolean; price: number }) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, delta: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalCount: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.name === item.name);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    });
  },

  removeItem: (name) => {
    set((state) => ({ items: state.items.filter((i) => i.name !== name) }));
  },

  updateQuantity: (name, delta) => {
    set((state) => {
      const updated = state.items
        .map((i) => (i.name === name ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0);
      return { items: updated };
    });
  },

  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
}));
