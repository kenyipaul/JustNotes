import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
	index: 0,
	color: "#00ff00"
}

const projectColorSlice = createSlice({
	name: "projectColorState",
	initialState: initialValue,
	reducers: {
		setProjectColor: (state, action) => {
			return state = action.payload;
		}
	}
})

export default projectColorSlice.reducer;
export const { setProjectColor } = projectColorSlice.actions;