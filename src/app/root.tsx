"use client"
import "@/styles/main.scss"
import React, { useEffect } from "react";
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
	const navbarState = useSelector((store: any) => store.navbarState);
	const themeState = useSelector((store: any) => store.themeState)


	useEffect(() => {
		const root = document.getElementById("root")

		sidebarState ? root?.classList.add("active") : root?.classList.remove("active")
		!navbarState ? root?.classList.add("inactive-navbar") : root?.classList.remove("inactive-navbar")

		if (sidebarState && !navbarState) {
			root?.classList.add("active")
			root?.classList.add("inactive-navbar")
		}

		themeState == "dark" ? root?.classList.add("dark") : root?.classList.remove("dark")

	}, [sidebarState, navbarState, themeState])

	return (
		<div id="root">
			<Sidebar/>
			<Navbar/>
			<main>{children}</main>
		</div>
	)
}