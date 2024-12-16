import "@/styles/main.scss"
import React from "react";
import ReduxProvider from "@/providers/redux-profile";

import Sidebar from "@/modules/sidebar";
import Navbar from "@/modules/navbar";

export default function Root({children}: { children: React.ReactNode }) {
	return (
		<ReduxProvider>
			<div id="root">
				<Sidebar/>
				<Navbar />
				<main>{children}</main>
			</div>
		</ReduxProvider>
	)
}