import { Box } from "@mui/material";
import { useEffect } from "react";
import AddEditPlayer from "./components/AddEditPlayer";
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
      <AddEditPlayer />
      <PlayerSearch name={name} setName={setName} />
      <Box>
        {filteredPlayers.map((player) => (
          <PlayerRow key={player.id} player={player} />
        ))}
      </Box>
    </div>
  );
};

export default PlayersList;
