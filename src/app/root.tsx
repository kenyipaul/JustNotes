"use client"
import "@/styles/main.scss"
import React from "react";
import ReduxProvider from "@/providers/redux-profile";

import Sidebar from "@/modules/sidebar";
import Navbar from "@/modules/navbar";
import {useSelector} from "react-redux";

export default function Root({children}: { children: React.ReactNode }) {


	return (
		<ReduxProvider>
			<Template>
				{children}
			</Template>
		</ReduxProvider>
	)
}

function Template({children}: {children: React.ReactNode}) {
	const sidebarState = useSelector((store: any) => store.sidebarState)

	return (
		<div id="root" className={sidebarState ? "active" : ""}>
			<Sidebar/>
			<Navbar/>
			<main>{children}</main>
		</div>
	)
}