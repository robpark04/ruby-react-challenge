import { TextField } from "@mui/material";

type Props = {
  name: string;
  setName: (value: string) => void;
};
const PlayerSearch = ({ name, setName }: Props) => {
  return (
    <form>
      <TextField
        label="Search by player name"
        value={name}
        autoComplete="off"
        onChange={(e) => setName(e.target.value.toLowerCase())}
      />
    </form>
  );
};

export default PlayerSearch;
