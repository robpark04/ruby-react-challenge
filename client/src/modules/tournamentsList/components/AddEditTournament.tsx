import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import PageLoading from "common/pageLoading/PageLoading";
import { ChangeEvent, FormEvent, useState } from "react";
import { API_POST_TYPES, postApi } from "utils/apis";
import { NotificationManager } from "react-notifications";
import useTournaments from "../hooks/useTournaments";

type Props = ButtonProps & {
  tournament?: Tournament;
};
const AddEditTournament = ({ tournament, ...rest }: Props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchTournaments } = useTournaments();
  const [tournamentData, setTournamentData] = useState<Tournament | null>(
    tournament ?? null
  );
  const afterSave = () => {
    setShowDialog(false);
    NotificationManager.success("Tournament Saved!");
    setIsLoading(false);
    fetchTournaments();
  };
  const saveTournament = async (e: FormEvent) => {
    e.preventDefault();
    if (!tournamentData) {
      return;
    }
    setIsLoading(true);
    if (tournamentData.id) {
      await postApi(
        `tournaments/${tournamentData.id}`,
        {
          ...tournamentData,
          created_at: null,
          updated_at: null,
        },
        API_POST_TYPES.UPDATE
      );
      afterSave();
      return;
    }
    await postApi("tournaments", tournamentData);
    afterSave();
  };

  const onFieldChange = (e: ChangeEvent) => {
    const name = e.target.name;
    const value = e.target.value;
    // @ts-ignore
    setTournamentData((data) => ({ ...data, [name]: value }));
  };

  const title = tournament ? "Edit Tournament" : "Add Tournament";

  return (
    <>
      <Button {...rest} onClick={() => setShowDialog(true)}>
        {title}
      </Button>
      {showDialog && (
        <Dialog open>
          <form onSubmit={saveTournament}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              <TextField
                required
                margin="normal"
                fullWidth
                inputProps={{ maxLength: 30, "data-testid": "name" }}
                label="Tournament Name"
                variant="outlined"
                name="name"
                onChange={onFieldChange}
                value={tournamentData?.name}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                inputProps={{ maxLength: 30, "data-testid": "course_name" }}
                label="Course Name"
                variant="outlined"
                name="course_name"
                onChange={onFieldChange}
                value={tournamentData?.course_name}
              />
              <TextField
                required
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                inputProps={{ type: "date", "data-testid": "date" }}
                label="Date"
                variant="outlined"
                name="date"
                onChange={onFieldChange}
                value={tournamentData?.date}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowDialog(false)}>Cancel</Button>
              <Button color="primary" variant="contained" type="submit">
                Save
              </Button>
            </DialogActions>
            {isLoading && <PageLoading />}
          </form>
        </Dialog>
      )}
    </>
  );
};

export default AddEditTournament;
