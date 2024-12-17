import { configureStore } from "@reduxjs/toolkit";

import sidebarState from "@/store/states/sidebarState";
import projectColorState from "@/store/states/projectColorState";
import navbarState from "@/store/states/navbarState"

export const store = configureStore({
	reducer: {
		navbarState: navbarState,
		sidebarState: sidebarState,
		projectColorState: projectColorState
	}
})

export type RootState = ReturnType<typeof store.getState>
