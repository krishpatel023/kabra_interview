import { createSlice } from "@reduxjs/toolkit";
import { getCart, updateCart } from "../utils/CartRequestHandler";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initialAPICall(state, action) {
      return action.payload;
    },
    add(state, action) {
      const doesExist = state.findIndex(
        (item) => item.ProductId === action.payload.ProductId
      );
      if (doesExist >= 0) {
        const indexFound = state.findIndex(
          (item) => item.ProductId === action.payload.ProductId
        );
        state.at(indexFound).ProductQty += 1;
      } else {
        state.push({ ...action.payload, ProductQty: 1 });
      }
      updateCart(JSON.parse(JSON.stringify(state)));
    },
    remove(state, action) {
      const updated = state.filter(
        (item) => item.ProductId !== action.payload.ProductId
      );
      updateCart(JSON.parse(JSON.stringify(updated)));
      return updated;
    },
    increaseQty(state, action) {
      const indexFound = state.findIndex(
        (item) => item.ProductId === action.payload.ProductId
      );
      state.at(indexFound).ProductQty += 1;
      updateCart(JSON.parse(JSON.stringify(state)));
    },
    decreaseQty(state, action) {
      const indexFound = state.findIndex(
        (item) => item.ProductId === action.payload.ProductId
      );
      if (state.at(indexFound).ProductQty === 1) {
        remove(state, action.payload);
      } else {
        state.at(indexFound).ProductQty -= 1;
      }
      updateCart(JSON.parse(JSON.stringify(state)));
    },
    emptyCart() {
      updateCart([]);
      return initialState;
    },
  },
});

export const {
  initialAPICall,
  add,
  remove,
  increaseQty,
  decreaseQty,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
