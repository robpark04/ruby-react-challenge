import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "utils/apis";
import { getPlayers } from "../selectors";
import { addPlayers } from "../slice";

const usePlayers = () => {
  const dispatch = useDispatch();
  const players = useSelector(getPlayers);
  const [name, setName] = useState<string>("");

  const filteredPlayers = useMemo(() => {
    if (!name) {
      return players;
    }

    return players.filter((player) => player.name.toLowerCase().includes(name));
  }, [players, name]);

  const loadPlayers = async () => {
    const result = await getApi("players");

    if (result?.length) {
      dispatch(addPlayers(result));
    }
  };

  return { filteredPlayers, name, setName, loadPlayers };
};

export default usePlayers;
