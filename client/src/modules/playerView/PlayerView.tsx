import { Box } from "@mui/material";
import { getPlayerById } from "modules/playersList/selectors";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const PlayerView = () => {
    const { id } = useParams();
    const player = useSelector(getPlayerById(id));

    if (!player) {
        return <Navigate to="/players" replace />
    }
    return <Box>
        {player.name}
    </Box>;
};

export default PlayerView;