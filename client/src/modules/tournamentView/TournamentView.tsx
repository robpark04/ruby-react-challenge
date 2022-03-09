import { Box, Button } from "@mui/material";
import AddEditTournament from "modules/tournamentsList/components/AddEditTournament";
import { getTournamentById } from "modules/tournamentsList/selectors";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { API_POST_TYPES, postApi } from "utils/apis";
import TournamentPlayers from "./components/TournamentPlayers";

const TournamentView = () => {
  const { id } = useParams();
  const tournament = useSelector(getTournamentById(id));
  const deleteTournament = async () => {
    if (!tournament) {
      return;
    }
    const result = await postApi(
      `tournaments/${tournament.id}`,
      {},
      API_POST_TYPES.DELETE
    );
    console.log(result);
  };
  if (!tournament) {
    return <Navigate to="/tournaments" replace />;
  }
  return (
    <Box>
      {tournament.name}
      <AddEditTournament tournament={tournament} />
      <Button onClick={deleteTournament}>Delete</Button>
      <TournamentPlayers id={tournament.id} />
    </Box>
  );
};

export default TournamentView;
