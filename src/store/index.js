import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from "redux-logger";
import listOfRepos from "./reducers";

export default configureStore({
  reducer: listOfRepos(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
