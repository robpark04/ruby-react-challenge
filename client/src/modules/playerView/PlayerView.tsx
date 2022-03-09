import { Box, Button, Grid, Typography } from "@mui/material";
import AddEditPlayer from "modules/playersList/components/AddEditPlayer";
import { getPlayerById } from "modules/playersList/selectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API_POST_TYPES, postApi } from "utils/apis";

const PlayerView = () => {
  const { id } = useParams();
  const player = useSelector(getPlayerById(id));
  const deletePlayer = async () => {
    if (!player) {
      return;
    }
    const result = await postApi(
      `players/${player.id}`,
      {},
      API_POST_TYPES.DELETE
    );
    console.log(result);
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
    </Box>
  );
};

export default PlayerView;
