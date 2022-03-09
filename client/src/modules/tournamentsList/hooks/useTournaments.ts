import { useDispatch } from "react-redux";
import { getApi } from "utils/apis";
import { addTournaments } from "../slice";

const useTournaments = () => {
  const dispatch = useDispatch();

  const fetchTournaments = async (query = "") => {
    const result = await getApi(`tournaments?${query}`);

    if (result?.length) {
      dispatch(addTournaments(result));
    }
  };

  return { fetchTournaments };
};

export default useTournaments;
