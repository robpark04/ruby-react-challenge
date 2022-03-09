import { Box, Button, Grid, Typography } from "@mui/material";
import PageLoading from "common/pageLoading/PageLoading";
import AddEditPlayer from "modules/playersList/components/AddEditPlayer";
import { getPlayerById } from "modules/playersList/selectors";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API_POST_TYPES, postApi } from "utils/apis";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

const PlayerView = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const player = useSelector(getPlayerById(id));
  const deletePlayer = async () => {
    if (!player) {
      return;
    }
    if (
      window.confirm(
        "This will delete the player details from system. Are you sure?"
      )
    ) {
      setIsLoading(true);
      await postApi(`players/${player.id}`, {}, API_POST_TYPES.DELETE);
      setIsLoading(false);
      NotificationManager.success("Player deleted!");
      navigate("/players");
    }
  };

  if (!player) {
    return null;
  }
  return (
    <Box>
      <Typography variant="h5">{player.name}</Typography>

      <Grid
        container
        component="dl" // mount a Definition List
        spacing={2}
        direction="column"
      >
        <Grid item>
          <Typography component="dt" variant="body1">
            Handicap
          </Typography>
          <Typography component="dd" variant="body2">
            {player.handicap}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="dt" variant="body1">
            Location
          </Typography>
          <Typography component="dd" variant="body2">
            {player.location}
          </Typography>
        </Grid>
      </Grid>
      <AddEditPlayer color="primary" variant="contained" player={player} />
      <Button
        sx={{ ml: 2 }}
        color="error"
        variant="contained"
        onClick={deletePlayer}
      >
        Delete
      </Button>
      {isLoading && <PageLoading />}
    </Box>
  );
};

export default PlayerView;
