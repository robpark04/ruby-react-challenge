import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "utils/apis";
import AddEditTournament from "./components/AddEditTournament";
import TournamentRow from "./components/TournamentRow";
import { getTournaments } from "./selectors";
import { addTournaments } from "./slice";

const TournamentsList = () => {
    const tournaments = useSelector(getTournaments)
    const dispatch = useDispatch();

    const loadTournaments = async () => {
        const result = await getApi("tournaments");

        if (result?.length) {
            dispatch(addTournaments(result))
        }
    }
    useEffect(() => {
        loadTournaments();
    }, []);

    return (
        <div>
            <AddEditTournament />
            <Box>
                {tournaments.map(tournament => <TournamentRow key={tournament.id} tournament={tournament} />)}
            </Box>
        </div>
    )
};

export default TournamentsList;