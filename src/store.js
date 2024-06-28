import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features/product";
import { saveState, loadState } from "./localStorage";

const preloadedState = loadState();
const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    product: store.getState().product,
  });
});

export default store;
