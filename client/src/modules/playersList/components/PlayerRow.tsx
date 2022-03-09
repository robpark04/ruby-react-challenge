import { Box } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  player: Player;
};
const PlayerRow = ({ player }: Props) => {

  return (
    <Box>
      {player.name}
      <Link to={`/player/${player.id}`}>View</Link>
    </Box>
  );
};

export default PlayerRow;
