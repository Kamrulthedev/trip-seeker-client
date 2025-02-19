import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICarItem {
  id: string | undefined;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
const initialCartState = {
  cartItems: [] as ICarItem[],
  total: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state: typeof initialCartState, action: PayloadAction<ICarItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload });
      }
      state.total += action.payload.price * action.payload.quantity;
      state.totalItems += 1;
    },
    removeFromCart(
      state: typeof initialCartState,
      action: PayloadAction<ICarItem>
    ) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalItems -= 1;
      state.total -= action.payload.price * action.payload.quantity;
    },

    incrementQuantity(
      state: typeof initialCartState,
      action: PayloadAction<ICarItem>
    ) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity += 1;
      state.total += action.payload.price;
    },

    decrementQuantity(
      state: typeof initialCartState,
      action: PayloadAction<ICarItem>
    ) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity -= 1;
      state.total -= action.payload.price;
    },

    clearCart(state: typeof initialCartState) {
      state.cartItems = [];
      state.total = 0;
      state.totalItems = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice;
