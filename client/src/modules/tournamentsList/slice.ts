import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  tournaments: Tournament[];
};

const initialState: InitialState = {
  tournaments: [],
};

export const tournamentsSlice = createSlice({
  name: "tournaments",
  initialState,
  reducers: {
    addTournaments: (state, action) => {
      state.tournaments = action.payload;
    },
  },
});

export const { addTournaments } = tournamentsSlice.actions;

export default tournamentsSlice.reducer;
