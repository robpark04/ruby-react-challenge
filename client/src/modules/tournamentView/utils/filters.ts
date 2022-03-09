export const filterTournamentPlayers = (
  currentPlayerIds: number[],
  allPlayers: Player[]
) => {
  if (!currentPlayerIds.length || !allPlayers.length) {
    return allPlayers;
  }

  return allPlayers.filter(({ id }) => !currentPlayerIds.includes(id));
};
