import { Box } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  tournament: Tournament;
};
const TournamentRow = ({ tournament }: Props) => {

  return (
    <Box>
      {tournament.name}
      <Link to={`/tournament/${tournament.id}`}>View</Link>
    </Box>
  );
};

export default TournamentRow;
