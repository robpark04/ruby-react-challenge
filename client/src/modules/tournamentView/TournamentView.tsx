import { Box, Button } from "@mui/material";
import { getTournamentById } from "modules/tournamentsList/selectors";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { deleteApi } from "utils/apis";

const TournamentView = () => {
    const { id } = useParams();
    const tournament = useSelector(getTournamentById(id));
    const deleteTournament = async () => {
        if (!tournament) {
            return;
        }
        const result = await deleteApi(`tournaments/${tournament.id}`)
        console.log(result);
    }
    if (!tournament) {
        return <Navigate to="/tournaments" replace />
    }
    return <Box>
        {tournament.name}
        <Button onClick={deleteTournament}>Delete</Button>
    </Box>;
};

export default TournamentView;