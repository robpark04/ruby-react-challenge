import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  tournaments: Tournament[];
  currentTournamentId?: string;
};

const initialState: InitialState = {
  tournaments: [],
  currentTournamentId: undefined,
};

export const tournamentsSlice = createSlice({
  name: "tournaments",
  initialState,
  reducers: {
    addTournaments: (state, action) => {
      state.tournaments = state.tournaments.concat(action.payload);
    },
  },
});

export const { addTournaments } = tournamentsSlice.actions;

export default tournamentsSlice.reducer;
