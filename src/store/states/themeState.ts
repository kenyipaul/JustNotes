import { createSlice } from "@reduxjs/toolkit";

const themeState = createSlice({
    name: "themeState",
    initialState: "light",
    reducers: {
        setTheme(state, action) {
            return state = action.payload;
        }
    }
})

export default themeState.reducer;
export const { setTheme } = themeState.actions;