import { createSlice } from "@reduxjs/toolkit";

const multiLang = createSlice({
  name: "multiLang",
  initialState: { textConstants: null, selectedLang: "english" },
  reducers: {
    addTextConstants: (state, action) => {
      state.textConstants = action.payload;
    },
    addSelectedLang: (state, action) => {
      state.selectedLang = action.payload;
    },
  },
});

export const { addTextConstants, addSelectedLang } = multiLang.actions;
export default multiLang.reducer;
