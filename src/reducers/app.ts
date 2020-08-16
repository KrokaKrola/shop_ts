import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: 1,
};

const appReducer = createSlice({
  name: "repoDetails",
  initialState,
  reducers: {
    changeTest(state) {
      // eslint-disable-next-line no-param-reassign
      state.test = 2;
    },
  },
});

export const { changeTest } = appReducer.actions;

export default appReducer.reducer;
