import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApi } from "utils/apis";
import AddEditPlayer from "./components/AddEditPlayer";
import PlayerRow from "./components/PlayerRow";
import { getPlayers } from "./selectors";
import { addPlayers } from "./slice";

const PlayersList = () => {
    const players = useSelector(getPlayers)
    const dispatch = useDispatch();

    const loadPlayers = async () => {
        const result = await getApi("players");

        if (result?.length) {
            dispatch(addPlayers(result))
        }
    }
    useEffect(() => {
        loadPlayers();
    }, []);

    return (
        <div>
            <AddEditPlayer />
            <Box>
                {players.map(player => <PlayerRow key={player.id} player={player} />)}
            </Box>
        </div>
    )
};

export default PlayersList;