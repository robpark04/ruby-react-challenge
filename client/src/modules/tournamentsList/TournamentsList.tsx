import { Box, List, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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
    // @ts-ignore
  }, []);

  return (
    <>
      <TournamentSearch />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Tournaments</Typography>
        <List dense sx={{ maxWidth: 480 }}>
          {tournaments.map((tournament) => (
            <TournamentRow key={tournament.id} tournament={tournament} />
          ))}
          {!tournaments.length && (
            <Typography>No Tournaments created yet!</Typography>
          )}
        </List>
      </Box>
      {isLoading && <PageLoading />}
    </>
  );
};

export default TournamentsList;
