import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserStore} from "./types.ts";

const initialState: UserStore = {
  showIntro: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setShowIntro: (state, action: PayloadAction<boolean>) => {
      state.showIntro = action.payload;
    }
  }
})

export const {setShowIntro} = userSlice.actions
export default userSlice.reducer