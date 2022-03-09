import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddEditTournament from "./components/AddEditTournament";
import TournamentRow from "./components/TournamentRow";
import TournamentSearch from "./components/TournamentSearch";
import { getTournaments } from "./selectors";
import useTournaments from "./hooks/useTournaments";

const TournamentsList = () => {
    const tournaments = useSelector(getTournaments)
    const { fetchTournaments } = useTournaments();


    useEffect(() => {
        fetchTournaments();
    }, []);

    return (
        <div>
            <TournamentSearch />
            <AddEditTournament />
            <Box>
                {tournaments.map(tournament => <TournamentRow key={tournament.id} tournament={tournament} />)}
            </Box>
        </div>
    )
};

export default TournamentsList;