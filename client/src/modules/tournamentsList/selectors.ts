import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const getTournaments = (state: RootState) =>
  state.tournaments.tournaments;

export const getTournamentById = (id?: string) =>
  createSelector(getTournaments, (tournaments) => {
    if (!id) {
      return null;
    }
    return tournaments.find((tournament) => tournament.id === parseInt(id));
  });
