"use client"
import { motion } from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import { AddIcon, FolderIcon, LeftArrowIcon, MoreBtn, ProjectFolderIcon, RightArrowIcon, UnfavoriteBtn } from "@/modules/icons";

export default function App() {

	const route = useRouter();

	const [projects, setProjects] = useState<any[]>([])
	const projectListRef = useRef<HTMLDivElement>(null);

	const scrollProjectRight = () => { projectListRef.current!.scrollBy(260, 0); }
	const scrollProjectLeft = () => { projectListRef.current!.scrollBy(-260, 0); }

	useEffect(() => {

		let savedProjects: any = localStorage.getItem("_just_notes_projects")!

		if (savedProjects == null) {
			savedProjects = [] as String[]
		} else {
			savedProjects = JSON.parse(savedProjects) as String[]
		}

		setProjects(savedProjects)

	}, [])

	return (
		<div id={"notes-view"}>

			<div className="project-list-container">
				<div className="top-bar">
					<h1>My Projects</h1>
					<div>
						<LeftArrowIcon onclick={scrollProjectLeft} />
						<AddIcon onclick={() => route.push("/create") } />
						<RightArrowIcon onclick={scrollProjectRight} />
					</div>
				</div>

				<div className="main">
					<div ref={projectListRef} className="project-list">
						{
							projects.map((data, key) => {
								return <Project data={data} key={key} />
							})
						}
					</div>
				</div>
			</div>

			<div className="notes-list-container">
				<div className="top-bar">
					<h1>My Notes</h1>
				</div>
				<div className="notes-list">
					<Note />
					<Note />
					<Note />
					<Note />
					<Note />
					<Note />
					<Note />
				</div>
			</div>

		</div>
	)
}

function Project({data}: {data: { name: string, color: string, date: string }}) {
	return (
		<motion.div 
			initial={{
				scale: 0
			}}
			animate={{
				scale: 1
			}}
		className={"project"} style={{backgroundColor: `${data.color}05`, borderTop: `2px solid ${data.color}70` }}>
			<MoreBtn />
			<ProjectFolderIcon fill={`${data.color}`} />
			<div>
				<p>12 Notes</p>
				<h1>{data.name}</h1>
				<h3>{new Date(data.date).toLocaleDateString()}</h3>
			</div>
		</motion.div>
	)
}


function Note() {
	return (
		<motion.div 
			initial={{
				opacity: 0,
				translateY: "10rem"
			}}
			animate={{
				opacity: 1,
				translateY: "0"
			}}
			transition={{
				duration: 0.5
			}}
		className="note">
			<div className="title-bar">
				<div className="tag"><FolderIcon /> Movie Website</div>
				<MoreBtn />
			</div>
			<div className="main">
				<h1>Movie Website</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi in magni nulla odio recusandae rem, sed soluta! Alias culpa dolor esse quas quod. Iste mollitia officia sapiente vel voluptate.</p>
			</div>
			<div className="footer">
				<p>Sunday 12, 2001</p>
				<UnfavoriteBtn />
			</div>
		</motion.div>
	)
}