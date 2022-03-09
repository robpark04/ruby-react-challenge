import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Tooltip,
} from "@mui/material";
import PlayerSearch from "modules/playersList/components/PlayerSearch";
import usePlayers from "modules/playersList/hooks/usePlayers";
import { useState, useEffect, useMemo } from "react";
import { API_POST_TYPES, getApi, postApi } from "utils/apis";
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
    const result = await postApi(
      `tournament_players/${id}/${playerId}`,
      {},
      API_POST_TYPES.DELETE
    );
    console.log(result);
  };

  console.log(tournamentPlayers);

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Players in this tournament</Typography>
        <List dense sx={{ maxWidth: 480 }}>
          {tournamentPlayers.map((player) => (
            <>
              <ListItem key={player.player_id}>
                <ListItemText
                  primary={player.name}
                  secondary={`Score: ${player.score || "NA"}`}
                />
                <AddScore player={player} />
                <Button
                  color="error"
                  onClick={() => removePlayer(player.player_id)}
                >
                  Remove
                </Button>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
      <Box>
        <Typography sx={{ mb: 2 }} variant="h6">
          Add new players to this tournament
        </Typography>
        <PlayerSearch name={name} setName={setName} />
        <List dense sx={{ maxWidth: 480 }}>
          {remainingPlayers.map((player) => (
            <>
              <ListItem key={player.id}>
                <ListItemText
                  primary={player.name}
                  secondary={`Handicap: ${player.handicap || "NA"}`}
                />
                <Tooltip title={`Add ${player.name} to this tournament`}>
                  <Button onClick={() => addPlayer(player)}>Add</Button>
                </Tooltip>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default TournamentPlayers;
