import { createSlice } from "@reduxjs/toolkit";

const navbarState = createSlice({
    name: "navbarState",
    initialState: true,
    reducers: {
        setNavbarState: (state, action) => {
            return state = action.payload;
        }
    }
})

export default navbarState.reducer;
export const { setNavbarState } = navbarState.actions;