import { ListItem, ListItemText, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  tournament: Tournament;
};
const TournamentRow = ({ tournament }: Props) => {
  return (
    <>
      <ListItem component={Link} to={`/tournament/${tournament.id}`}>
        <ListItemText primary={tournament.name} secondary={tournament.date} />
        <Button>View</Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default TournamentRow;
