import {createSelector} from "@reduxjs/toolkit";
import type {UserStore} from "./types";

export const selectUserBase = createSelector(
  (state: RootState) => state,
  (state) => state.user
)

export const selectShowInto = createSelector(
  selectUserBase,
  (state: UserStore) => state.showIntro
)