import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Tooltip,
} from "@mui/material";
import PageLoading from "common/pageLoading/PageLoading";
import PlayerSearch from "modules/playersList/components/PlayerSearch";
import usePlayers from "modules/playersList/hooks/usePlayers";
import { useState, useEffect, useMemo } from "react";
import { API_POST_TYPES, getApi, postApi } from "utils/apis";
import { filterTournamentPlayers } from "../utils/filters";
import AddScore from "./AddScore";
import { NotificationManager } from "react-notifications";

const TournamentPlayers = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    await postApi("tournament_players", {
      tournament_id: id,
      player_id: player.id,
    });
    setIsLoading(false);
    NotificationManager.success("Player added to the tournament!");
    loadTournamentPlayers();
  };

  const removePlayer = async (playerId: number) => {
    setIsLoading(true);

    await postApi(
      `tournament_players/${id}/${playerId}`,
      {},
      API_POST_TYPES.DELETE
    );
    setIsLoading(false);
    NotificationManager.success("Player removed from the tournament!");
    loadTournamentPlayers();
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Players in this tournament</Typography>
        {!tournamentPlayers.length && (
          <Typography>No Players added yet!</Typography>
        )}
        <List dense sx={{ maxWidth: 480 }}>
          {tournamentPlayers.map((player) => (
            <ListItem
              key={player.player_id}
              sx={{ borderBottom: "1px solid #ddd" }}
            >
              <ListItemText
                primary={player.name}
                secondary={`Score: ${player.score || "NA"}`}
              />
              <AddScore player={player} onUpdate={loadTournamentPlayers} />
              <Button
                color="error"
                onClick={() => removePlayer(player.player_id)}
              >
                Remove
              </Button>
            </ListItem>
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
            <ListItem key={player.id} sx={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText
                primary={player.name}
                secondary={`Handicap: ${player.handicap || "NA"}`}
              />
              <Tooltip title={`Add ${player.name} to this tournament`}>
                <Button onClick={() => addPlayer(player)}>Add</Button>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Box>
      {isLoading && <PageLoading />}
    </Box>
  );
};

export default TournamentPlayers;
