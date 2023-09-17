import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop;
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      return { items: [] };
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
