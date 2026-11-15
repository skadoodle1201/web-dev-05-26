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
    deleteItem(state, params) {
      const payload = params.payload;
      const { name } = payload;
      const productInformation = state.product[name];
      if (productInformation) {
        state.totalCartProducts -= productInformation.quantity;
      }
      delete state.product[name];
    },
    reduceItem(state, params) {
      const payload = params.payload;
      const { name } = payload;
      const productInformation = state.product[name];
      if (productInformation) {
        let quantity = productInformation.quantity;
        if (quantity > 0) {
          quantity -= 1;
        }
        if (quantity == 0) {
          delete state.product[name];
        } else {
          state.product[name].quantity = quantity;
        }
        state.totalCartProducts -= 1;
      }
    },
  },
});

export const { addItem, deleteItem, reduceItem } = cartSlice.actions; //Used Where the action needs to be triggered
export default cartSlice.reducer; // This is used inside the store
