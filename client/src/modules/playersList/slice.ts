import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  players: Player[];
};

const initialState: InitialState = {
  players: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayers: (state, action) => {
      state.players = state.players.concat(action.payload);
    },
  },
});

export const { addPlayers } = playersSlice.actions;

export default playersSlice.reducer;
