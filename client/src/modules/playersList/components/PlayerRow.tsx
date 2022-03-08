import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import AddEditPlayer from "./AddEditPlayer";

type Props = {
  player: Player;
};
const PlayerRow = ({ player }: Props) => {

  return (
    <Box>
      {player.name}
      <Link to={`/player/${player.id}`}>View</Link>
      <AddEditPlayer player={player} />
    </Box>
  );
};

export default PlayerRow;
