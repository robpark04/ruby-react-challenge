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

type Props = {
  tournament?: Tournament;
};
const AddEditTournament = ({ tournament }: Props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [tournamentData, setTournamentData] = useState<Tournament | null>(
    tournament ?? null
  );
  const saveTournament = async (e: FormEvent) => {
    e.preventDefault();
    if (!tournamentData) {
      return;
    }
    if (tournamentData.id) {
      const result = await postApi(
        `tournaments/${tournamentData.id}`,
        {
          ...tournamentData,
          created_at: null,
          updated_at: null,
        },
        API_POST_TYPES.UPDATE
      );
      console.log(result);

      return;
    }
    const result = await postApi("tournaments", tournamentData);
    console.log(result);
  };

  const onFieldChange = (e: ChangeEvent) => {
    // @ts-ignore
    setTournamentData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const title = tournament ? "Edit Tournament" : "Add Tournament";

  return (
    <>
      <Button onClick={() => setShowDialog(true)}>{title}</Button>
      {showDialog && (
        <Dialog open>
          <form onSubmit={saveTournament}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              <TextField
                required
                margin="normal"
                fullWidth
                inputProps={{ maxLength: 30 }}
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
                inputProps={{ maxLength: 30 }}
                label="Course Name"
                variant="outlined"
                name="course_name"
                onChange={onFieldChange}
                value={tournamentData?.course_name}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                inputProps={{ type: "date" }}
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
          </form>
        </Dialog>
      )}
    </>
  );
};

export default AddEditTournament;
