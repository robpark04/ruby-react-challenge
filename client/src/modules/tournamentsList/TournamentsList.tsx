import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddEditTournament from "./components/AddEditTournament";
import TournamentRow from "./components/TournamentRow";
import TournamentSearch from "./components/TournamentSearch";
import { getTournaments } from "./selectors";
import useTournaments from "./hooks/useTournaments";
import PageLoading from "common/pageLoading/PageLoading";

const TournamentsList = () => {
  const tournaments = useSelector(getTournaments);
  const { fetchTournaments, isLoading } = useTournaments();

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <>
      <TournamentSearch />
      <AddEditTournament />
      <Box>
        {tournaments.map((tournament) => (
          <TournamentRow key={tournament.id} tournament={tournament} />
        ))}
      </Box>
      {isLoading && <PageLoading />}
    </>
  );
};

export default TournamentsList;
