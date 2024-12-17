import { configureStore } from "@reduxjs/toolkit";

import navbarState from "@/store/states/navbarState"
import sidebarState from "@/store/states/sidebarState";
import projectColorState from "@/store/states/projectColorState";
import themeState from "@/store/states/themeState"

export const store = configureStore({
	reducer: {
		themeState: themeState,
		navbarState: navbarState,
		sidebarState: sidebarState,
		projectColorState: projectColorState
	}
})

export type RootState = ReturnType<typeof store.getState>
