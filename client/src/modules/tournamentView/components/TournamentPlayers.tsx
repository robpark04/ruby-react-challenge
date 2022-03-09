import { Box, Button } from "@mui/material";
import PlayerSearch from "modules/playersList/components/PlayerSearch";
import usePlayers from "modules/playersList/hooks/usePlayers";
import { useState, useEffect, useMemo } from "react";
import { deleteApi, getApi, postApi } from "utils/apis";
import { filterTournamentPlayers } from "../utils/filters";
import AddScore from "./AddScore";

const TournamentPlayers = ({ id }: { id: number }) => {
  const [tournamentPlayers, setTournamentPlayers] = useState<
    TournamentPlayer[]
  >([]);

  const { loadPlayers, filteredPlayers: players, name, setName } = usePlayers();

  const loadTournamentPlayers = async () => {
    const result = await getApi(`tournament_players/${id}`);

    setTournamentPlayers(result);
  };
  useEffect(() => {
    loadPlayers();
    loadTournamentPlayers();
  }, []);

  const remainingPlayers = useMemo(
    () =>
      filterTournamentPlayers(
        tournamentPlayers.map((tp) => tp.player_id),
        players
      ),
    [tournamentPlayers, players]
  );
  const addPlayer = async (player: Player) => {
    const result = await postApi("tournament_players", {
      tournament_id: id,
      player_id: player.id,
    });
    console.log(result);
  };

  const removePlayer = async (playerId: number) => {
    const result = await deleteApi(`tournament_players/${id}/${playerId}`);
    console.log(result);
  };

  console.log(tournamentPlayers);

  return (
    <Box>
      TournamentPlayers
      {tournamentPlayers.map((player) => (
        <Box key={player.player_id}>
          <span>
            {player.name} - {player.player_id} - {player.handicap}
          </span>
          <Button onClick={() => removePlayer(player.player_id)}>
            Remove from Tournament
          </Button>
          <AddScore player={player} />
        </Box>
      ))}
      <PlayerSearch name={name} setName={setName} />
      {remainingPlayers.map((player) => (
        <Box key={player.id}>
          {player.name}
          <Button onClick={() => addPlayer(player)}>Add to Tournament</Button>
        </Box>
      ))}
    </Box>
  );
};

export default TournamentPlayers;
