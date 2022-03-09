import { Box, List, Typography } from "@mui/material";
import { useEffect } from "react";
import PlayerRow from "./components/PlayerRow";
import PlayerSearch from "./components/PlayerSearch";
import usePlayers from "./hooks/usePlayers";

const PlayersList = () => {
  const { loadPlayers, filteredPlayers, name, setName } = usePlayers();

  useEffect(() => {
    loadPlayers();
  }, []);

  return (
    <div>
      <PlayerSearch name={name} setName={setName} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Players</Typography>
        <List dense sx={{ maxWidth: 480 }}>
          {filteredPlayers.map((player) => (
            <PlayerRow key={player.id} player={player} />
          ))}
        </List>
      </Box>
    </div>
  );
};

export default PlayersList;
