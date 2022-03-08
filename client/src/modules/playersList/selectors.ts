import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const getPlayers = (state: RootState) => state.players.players;

export const getPlayerById = (id?: string) =>
  createSelector(getPlayers, (players) => {
    if (!id) {
      return null;
    }
    return players.find((player) => player.id === parseInt(id));
  });
