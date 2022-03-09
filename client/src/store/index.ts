import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tournamentsReducer from "../modules/tournamentsList/slice";
import playersReducer from "../modules/playersList/slice";

export const createRootReducer = () =>
  combineReducers({ tournaments: tournamentsReducer, players: playersReducer });
const store = configureStore({
  reducer: createRootReducer(),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
