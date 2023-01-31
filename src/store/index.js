import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";

const setupStore = (preloadedState) =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
      }).concat(apiSlice.middleware)
  });

export default setupStore;
