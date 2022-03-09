import { Box, Button, Typography } from "@mui/material";
import AddEditTournament from "modules/tournamentsList/components/AddEditTournament";
import { getTournamentById } from "modules/tournamentsList/selectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API_POST_TYPES, postApi } from "utils/apis";
import TournamentPlayers from "./components/TournamentPlayers";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PageLoading from "common/pageLoading/PageLoading";
import { DateRange, GolfCourse } from "@mui/icons-material";

const TournamentView = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const tournament = useSelector(getTournamentById(id));
  const deleteTournament = async () => {
    if (!tournament) {
      return;
    }
    if (
      window.confirm(
        "This will delete the tournament details from system. Are you sure?"
      )
    ) {
      setIsLoading(true);
      await postApi(`tournaments/${tournament.id}`, {}, API_POST_TYPES.DELETE);
      setIsLoading(false);
      NotificationManager.success("Tournament deleted!");
      navigate("/tournaments");
    }
  };
  if (!tournament) {
    return null;
  }
  return (
    <Box>
      <Typography variant="h5">{tournament.name}</Typography>
      <Typography variant="body1">
        <DateRange sx={{ verticalAlign: "bottom" }} /> {tournament.date}
      </Typography>
      <Typography variant="body2">
        <GolfCourse sx={{ verticalAlign: "bottom" }} />
        {tournament.course_name}
      </Typography>
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
      {isLoading && <PageLoading />}
    </Box>
  );
};

export default TournamentView;
