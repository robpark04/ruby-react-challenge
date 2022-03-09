import { Button, Divider, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  player: Player;
};
const PlayerRow = ({ player }: Props) => {
  return (
    <>
      <ListItem component={Link} to={`/player/${player.id}`}>
        <ListItemText primary={player.name} secondary={player.location} />
        <Button>View</Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default PlayerRow;
