import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // addToCart: (state, actions) => {
    //   state.value.push(actions.payload);
    // },
    addToCart: (state, action) => {
      // Improved approach: Check for duplicates before adding
      const existingProduct = state.value.find(
        (product) => product.title === action.payload.title
      );
      if (!existingProduct) {
        state.value.push(action.payload);
      } else {
        alert("Product already exist");
      }
    },
    clearCart: (state) => {
      state.value = [];
    },
    deleteProduct: (state, actions) => {
      state.value = state.value.filter(
        (product) => product.id !== actions.payload
      );
    },
    increaseQuantity: (state, actions) => {
      const product = state.value.find(
        (product) => product.title === actions.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, actions) => {
      const product = state.value.find(
        (product) => product.title === actions.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

// Selector to calculate total price
export const selectTotalPrice = (state) =>
  state.product.value.reduce(
    (total, product) => total + Number(product.price) * product.quantity,
    0
  );

export const {
  addToCart,
  clearCart,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
} = productSlice.actions;
export default productSlice.reducer;
