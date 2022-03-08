import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const getTournaments = (state: RootState) =>
  state.tournaments.tournaments;

export const getTournamentById = (tid?: string) =>
  createSelector(getTournaments, (tournaments) => {
    if (!tid) {
      return null;
    }
    return tournaments.find((tournament) => tournament.id === parseInt(tid));
  });
