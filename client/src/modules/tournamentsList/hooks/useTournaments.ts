import { useState } from "react";
import { useDispatch } from "react-redux";
import { getApi } from "utils/apis";
import { addTournaments } from "../slice";

const useTournaments = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const fetchTournaments = async (query = "") => {
    setIsLoading(true);
    dispatch(addTournaments([]));
    const result = await getApi(`tournaments?${query}`);

    if (result?.length) {
      dispatch(addTournaments(result));
    }
    setIsLoading(false);
  };

  return { fetchTournaments, isLoading };
};

export default useTournaments;
