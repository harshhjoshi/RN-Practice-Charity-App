import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "message",
  initialState: {
    name: null,
    avatar: "",
    mcstatus: null,
    branchName: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setMCStatus: (state, action) => {
      state.mcstatus = action.payload;
    },
    setBranchStatus: (state, action) => {
      state.branchName = action.payload;
    },
  },
});

export const {
  setName,
  setAvatar,
  setMCStatus,
  setBranchStatus,
} = userSlice.actions;

export default userSlice.reducer;
