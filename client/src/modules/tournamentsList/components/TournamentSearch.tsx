import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import useTournaments from "../hooks/useTournaments";

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
    <>
      <form onSubmit={searchTournaments}>
        <TextField id="outlined-search" label="Search field" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Button type="submit">Search</Button>
      </form>

    </>
  );
}

export default TournamentSearch;