import { useDispatch, useSelector } from "react-redux";
import { getApi } from "utils/apis";
import { decrement, increment } from "./slice";

const TournamentsList = () => {
    // @ts-ignore
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const save = async (e: React.MouseEvent) => {
        e.stopPropagation();

        const result = await getApi("tournaments");
        console.log(result);
    }

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <button onClick={save}>Save</button>
        </div>
    )
};

export default TournamentsList;