import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import useTournaments from "../hooks/useTournaments";
import AddEditTournament from "./AddEditTournament";

const TournamentSearch = () => {
  const [date, setDate] = useState<string>("");
  const { fetchTournaments } = useTournaments();

  const searchTournaments = async (e: FormEvent) => {
    e.preventDefault();
    if (!date) {
      return;
    }
    await fetchTournaments(`date=${date}`);
  };

  return (
    <Box>
      <form onSubmit={searchTournaments}>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Filter by tournament date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{ "& input": { pt: 1, pb: 1 } }}
        />
        <Button sx={{ ml: 2 }} variant="contained" type="submit">
          Search
        </Button>
        <AddEditTournament variant="contained" sx={{ float: "right" }} />
      </form>
    </Box>
  );
};

export default TournamentSearch;
