import { Box } from "@mui/material";
import { getTournamentById } from "modules/tournamentsList/selectors";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const TournamentView = () => {
    const { id } = useParams();
    const tournament = useSelector(getTournamentById(id));

    if (!tournament) {
        return <Navigate to="/tournaments" replace />
    }
    return <Box>
        {tournament.name}
    </Box>;
};

export default TournamentView;