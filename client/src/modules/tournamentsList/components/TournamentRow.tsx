import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  tournament: Tournament;
};
const TournamentRow = ({ tournament }: Props) => {
  return (
    <Box>
      {tournament.name}
      <Link to={`/tournament/${tournament.id}`}>View</Link>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Box>
  );
};

export default TournamentRow;
