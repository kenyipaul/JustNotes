import { configureStore } from "@reduxjs/toolkit";
import sidebarState from "@/store/states/sidebarState";

export const store = configureStore({
	reducer: {
		sidebarState: sidebarState
	}
})

export type RootState = ReturnType<typeof store.getState>
