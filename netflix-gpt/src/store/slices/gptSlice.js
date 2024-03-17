import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptSearch",
  initialState: {
    isClicked: true,
  },
  reducers: {
    gptSearchBtnToggler: (state) => {
      state.isClicked = !state.isClicked;
    },
  },
});

export const { gptSearchBtnToggler } = gptSearch.actions;
export default gptSearch.reducer;
