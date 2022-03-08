import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getApi, postApi } from "utils/apis";

const TournamentPlayers = ({ id }: { id: number }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [tournamentPlayers, setTournamentPlayers] = useState<any[]>([]);
  const loadPlayers = async () => {
    const result = await getApi("players");

    setPlayers(result);
  }
  const loadTournamentPlayers = async () => {
    const result = await getApi(`tournament_players/${id}`);

    setTournamentPlayers(result);
  }
  useEffect(() => {
    loadPlayers();
    loadTournamentPlayers();
  }, []);

  const addPlayer = async (player: Player) => {
    const result = await postApi("tournament_players", { tournament_id: id, player_id: player.id });
    console.log(result);
  };

  console.log(tournamentPlayers);

  return (
    <Box>
      TournamentPlayers

      {players.map(player => (
        <Box>
          {player.name}
          <Button onClick={() => addPlayer(player)}>Add to Tournament</Button>
        </Box>
      ))}
    </Box>
  );
};

export default TournamentPlayers;