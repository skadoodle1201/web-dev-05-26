import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { product: {}, totalCartProducts: 0 },
  reducers: {
    addItem(state, params) {
      const payload = params.payload;
      const { name, price } = payload;
      if (state.product[name]) {
        const q = state.product[name].quantity || 0;
        state.product[name] = {
          ...state.product[name],
          quantity: q + 1,
        };
      } else {
        state.product[name] = {
          price,
          quantity: 1,
        };
      }
      state.totalCartProducts += 1;
    },
    // removeItem(state) {
    //   if (state.quantity > 0) state.quantity -= 1;
    // },
  },
});

export const { addItem } = cartSlice.actions; //Used Where the action needs to be triggered
export default cartSlice.reducer; // This is used inside the store
