import { configureStore } from "@reduxjs/toolkit";
import tournamentsReducer from "../modules/tournamentsList/slice";

const store = configureStore({
  reducer: {
    tournaments: tournamentsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
