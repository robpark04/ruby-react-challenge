import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "utils/apis";
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

    const save = async (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <div>
            <Box>
                {tournaments.map(tournament => <TournamentRow key={tournament.id} tournament={tournament} />)}
            </Box>
            <button onClick={save}>Save</button>
        </div>
    )
};

export default TournamentsList;