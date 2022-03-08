import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteApi } from "utils/apis";
import AddEditPlayer from "./AddEditPlayer";

type Props = {
  player: Player;
};
const PlayerRow = ({ player }: Props) => {
  const deletePlayer = async () => {
    const result = await deleteApi(`players/${player.id}`)
    console.log(result);
  }
  return (
    <Box>
      {player.name}
      <Link to={`/player/${player.id}`}>View</Link>
      <AddEditPlayer player={player} />
      <Button onClick={deletePlayer}>Delete</Button>
    </Box>
  );
};

export default PlayerRow;
