import { RootState } from "store";

export const getTournaments = (state: RootState) =>
  state.tournaments.tournaments;
