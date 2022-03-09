import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { API_POST_TYPES, postApi } from "utils/apis";
import { NotificationManager } from "react-notifications";
import PageLoading from "common/pageLoading/PageLoading";

type Props = {
  player: TournamentPlayer;
  onUpdate: () => void;
};
const AddScore = ({ player, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState(player);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  const saveScore = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    await postApi(
      `tournament_players/${player.id}`,
      {
        ...playerData,
        created_at: null,
        updated_at: null,
      },
      API_POST_TYPES.UPDATE
    );
    setIsLoading(false);
    NotificationManager.success("Player score added!");
    setShowScoreDialog(false);
    onUpdate();
    return;
  };
  const onFieldChange = (e: ChangeEvent) => {
    // @ts-ignore
    setPlayerData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <Button onClick={() => setShowScoreDialog(true)}>Add score</Button>
      {showScoreDialog && (
        <Dialog open>
          <form onSubmit={saveScore}>
            <DialogTitle>Add/update Score for {player.name}</DialogTitle>
            <DialogContent>
              <TextField
                required
                margin="normal"
                fullWidth
                inputProps={{ type: "number" }}
                label="Score"
                variant="outlined"
                name="score"
                onChange={onFieldChange}
                value={playerData.score}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowScoreDialog(false)}>Cancel</Button>
              <Button color="primary" variant="contained" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
          {isLoading && <PageLoading />}
        </Dialog>
      )}
    </>
  );
};

export default AddScore;
