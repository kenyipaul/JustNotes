"use client"
import "./styles/_sidebar.scss"
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import {RootState} from "@/store/store";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {setSidebar} from "@/store/states/sidebarState";
import {setTheme} from "@/store/states/themeState";
import { ArrowIcon, ArchiveIcon, FavIcon, TrashIcon, NoteIcon, ProjectIcon, CloseIcon, MenuBtn } from "./icons"

export default function Sidebar() {

	const route = useRouter();
	const dispatch = useDispatch();
	const sidebarState = useSelector((store: RootState) => store.sidebarState)
	const themeState = useSelector((store: RootState) => store.themeState)

	const closeSidebar = () => dispatch((setSidebar(false)))
	const openSidebar = () => dispatch((setSidebar(true)))


	const changeTheme = () => {
		if (themeState == "light")
			dispatch(setTheme("dark"));
		else
			dispatch(setTheme("light"));
	}

	return (
		<motion.div initial={{ translateX: "-5rem" }} animate={{ translateX: "0" }} id="sidebar" className={sidebarState ? "active" : ""}>
			<div className="content">
				<section>
					<motion.div initial={{ translateY: -70 }} animate={{ translateY: 0 }} transition={{ duration: 0.5 }} className="header">
						<h1>JUSTNOTES</h1>
						<MenuBtn onclick={openSidebar} />
						<CloseIcon onclick={closeSidebar} />
					</motion.div>

					<div className="main">
						<ul>
							<SideLink onclick={() => route.push("/")}> <div><NoteIcon/><p>Notes</p></div> </SideLink>
							<SideLink onclick={() => route.push("/favorites")}> <div><FavIcon/><p>Favorites</p></div> </SideLink>
							<SideLink onclick={() => route.push("/projects")}> <div><ProjectIcon/><p>Projects</p></div> </SideLink>
							<SideLink onclick={() => route.push("/archive")}> <div><ArchiveIcon/><p>Archive</p></div> </SideLink>
							<SideLink onclick={() => route.push("/trash")}> <div><TrashIcon/><p>Trash</p></div> </SideLink>
							
						</ul>
					</div>
				</section>

				<section>
					<div onClick={changeTheme}> <svg width="2rem" height="2rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>Theme Mode</title> <g id="Layer_2" data-name="Layer 2"> <g id="Icons"> <g> <rect width="48" height="48" fill="none"/> <g> <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"/> <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"/> </g> </g> </g> </g> </svg> <p>Light Mode</p> </div>
				</section>
			</div>
		</motion.div>
	)
}

function SideLink({children, onclick}: {children: React.ReactNode, onclick: () => void}) {
	return (
		<motion.li initial={{ scale: 0, opacity: 0, rotate: 60 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ duration: 0.1 }} onClick={onclick}> 
			{children}
			{/* <ArrowIcon/> */}
		</motion.li>
	)
}
