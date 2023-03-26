import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../Store/store";

interface StyleState {
    isDark: boolean,
    isEnglish: boolean
};

const initialState: StyleState = {
    isDark: false,
    isEnglish: false
};

export const styleSlice = createSlice({
    name: 'styles',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isDark = !state.isDark;
        },
        changeLang: (state) => {
            state.isEnglish = !state.isEnglish;
        }
    },
});

export const { changeTheme, changeLang } = styleSlice.actions;

export const selectDark = (state: RootState) => state.styles.isDark;
export const selectLang = (state: RootState) => state.styles.isEnglish;

export default styleSlice.reducer;