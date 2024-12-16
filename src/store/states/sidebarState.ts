import { createSlice } from "@reduxjs/toolkit";

const sidebarState = createSlice({
	name: "sidebarState",
	initialState: false,
	reducers: {
		setSidebar: (state, action) => {
			return state = action.payload;
		}
	}
})

export default sidebarState.reducer;
export const { setSidebar } = sidebarState.actions;