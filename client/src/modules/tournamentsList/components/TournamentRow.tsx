import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import AddEditTournament from "./AddEditTournament";

type Props = {
  tournament: Tournament;
};
const TournamentRow = ({ tournament }: Props) => {

  return (
    <Box>
      {tournament.name}
      <Link to={`/tournament/${tournament.id}`}>View</Link>
      <AddEditTournament tournament={tournament} />
    </Box>
  );
};

export default TournamentRow;
