import { configureStore } from "@reduxjs/toolkit";
import tournamentsReducer from "../modules/tournamentsList/slice";
import playersReducer from "../modules/playersList/slice";

const store = configureStore({
  reducer: {
    tournaments: tournamentsReducer,
    players: playersReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
