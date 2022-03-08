import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/tournamentsList/slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
