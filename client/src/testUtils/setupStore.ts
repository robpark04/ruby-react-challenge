import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { createRootReducer, RootState } from "store";

export function setupStore<T = RootState>(preloadedState?: PreloadedState<T>) {
  return configureStore({
    reducer: createRootReducer(),
    preloadedState,
  });
}
