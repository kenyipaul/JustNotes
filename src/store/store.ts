import { configureStore } from "@reduxjs/toolkit";
import sidebarState from "@/store/states/sidebarState";

export const store = configureStore({
	reducer: {
		sidebarState: sidebarState
	}
})