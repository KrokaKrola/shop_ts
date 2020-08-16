import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "reducers/app";

const rootReducer = combineReducers({
  appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
