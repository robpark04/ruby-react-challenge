import { TextField } from "@mui/material";
import AddEditPlayer from "./AddEditPlayer";

type Props = {
  name: string;
  setName: (value: string) => void;
};
const PlayerSearch = ({ name, setName }: Props) => {
  return (
    <form>
      <TextField
        label="Filter by player name"
        value={name}
        autoComplete="off"
        InputLabelProps={{ shrink: true }}
        sx={{ "& input": { pt: 1, pb: 1 } }}
        onChange={(e) => setName(e.target.value.toLowerCase())}
      />
      <AddEditPlayer variant="contained" sx={{ float: "right" }} />
    </form>
  );
};

export default PlayerSearch;
