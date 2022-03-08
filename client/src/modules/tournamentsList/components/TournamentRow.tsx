import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteApi } from "utils/apis";
import AddEditTournament from "./AddEditTournament";

type Props = {
  tournament: Tournament;
};
const TournamentRow = ({ tournament }: Props) => {
  const deleteTournament = async () => {
    const result = await deleteApi(`tournaments/${tournament.id}`)
    console.log(result);
  }
  return (
    <Box>
      {tournament.name}
      <Link to={`/tournament/${tournament.id}`}>View</Link>
      <AddEditTournament tournament={tournament} />
      <Button onClick={deleteTournament}>Delete</Button>
    </Box>
  );
};

export default TournamentRow;
