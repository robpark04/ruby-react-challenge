import { Box, Button } from "@mui/material";
import { getPlayerById } from "modules/playersList/selectors";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { deleteApi } from "utils/apis";

const PlayerView = () => {
    const { id } = useParams();
    const player = useSelector(getPlayerById(id));
    const deletePlayer = async () => {
        if (!player) {
            return;
        }
        const result = await deleteApi(`players/${player.id}`)
        console.log(result);
    }

    if (!player) {
        return <Navigate to="/players" replace />
    }
    return <Box>
        {player.name}
        <Button onClick={deletePlayer}>Delete</Button>

    </Box>;
};

export default PlayerView;