import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { API_POST_TYPES, postApi } from "utils/apis";
import { NotificationManager } from "react-notifications";

type Props = {
  player?: Player;
};
const AddEditPlayer = ({ player }: Props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [playerData, setPlayerData] = useState<Player | null>(player ?? null);
  const savePlayer = async (e: FormEvent) => {
    e.preventDefault();
    if (!playerData) {
      return;
    }
    if (playerData.id) {
      const result = await postApi(
        `players/${playerData.id}`,
        {
          ...playerData,
          created_at: null,
          updated_at: null,
        },
        API_POST_TYPES.UPDATE
      );
      console.log(result);

      return;
    }
    const result = await postApi("players", playerData);
    NotificationManager.success("Success message", "Title here");
    console.log(result);
  };

  const onFieldChange = (e: ChangeEvent) => {
    // @ts-ignore
    setPlayerData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const title = player ? "Edit Player" : "Add Player";

  return (
    <>
      <Button onClick={() => setShowDialog(true)}>{title}</Button>
      {showDialog && (
        <Dialog open>
          <form onSubmit={savePlayer}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              <TextField
                required
                margin="normal"
                fullWidth
                inputProps={{ maxLength: 30 }}
                label="Player Name"
                variant="outlined"
                name="name"
                onChange={onFieldChange}
                value={playerData?.name}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                inputProps={{ type: "number" }}
                label="Handicap"
                variant="outlined"
                name="handicap"
                onChange={onFieldChange}
                value={playerData?.handicap}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                label="Location"
                variant="outlined"
                name="location"
                onChange={onFieldChange}
                value={playerData?.location}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowDialog(false)}>Cancel</Button>
              <Button color="primary" variant="contained" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </>
  );
};

export default AddEditPlayer;
