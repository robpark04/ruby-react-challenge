import { Box, Button, Typography } from "@mui/material";
import AddEditTournament from "modules/tournamentsList/components/AddEditTournament";
import { getTournamentById } from "modules/tournamentsList/selectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
    return null;
  }
  return (
    <Box>
      <Typography variant="h5">{tournament.name}</Typography>
      <Box sx={{ mt: 2 }}>
        <AddEditTournament
          color="primary"
          variant="contained"
          tournament={tournament}
        />
        <Button
          sx={{ ml: 2 }}
          color="error"
          variant="contained"
          onClick={deleteTournament}
        >
          Delete
        </Button>
      </Box>
      <TournamentPlayers id={tournament.id} />
    </Box>
  );
};

export default TournamentView;
