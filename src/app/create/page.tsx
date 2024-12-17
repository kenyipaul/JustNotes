"use client"
import "./styles/styles.scss"
import { motion } from "framer-motion";
import { RootState } from "@/store/store"
import {useSelector, useDispatch} from "react-redux";
import { setProjectColor } from "@/store/states/projectColorState"
import {useRouter} from "next/navigation";

export default function App() {

	const route = useRouter()

	const projectColorState = useSelector((store: RootState) => store.projectColorState)
	const colors = ["#00ff00", "#ff0053", "#9900ff", "#ffbb00", "#0095ff"]

	const saveProject = () => {
		const projectName = document.getElementById("ProjectName") as HTMLInputElement;
		const projectColor = projectColorState.color;

		let savedProjects: any = localStorage.getItem("_just_notes_projects")!

		if (savedProjects == null) {
			savedProjects = [] as String[]
		} else {
			if (typeof savedProjects === "string") {
				savedProjects = JSON.parse(savedProjects) as String[]
			}
		}

		const project = {
			name: projectName.value,
			color: projectColor,
			date: new Date().getTime()
		}

		savedProjects.push(project)

		localStorage.setItem("_just_notes_projects", JSON.stringify(savedProjects))
		route.push("/")
	}

	return (
		<div className="project-manager">

			<div className="form">
				<h1>Create New Project</h1>
				<div className="input-area">
					<label htmlFor="projectName">Project Name</label>
					<motion.input initial={{ rotateX: 90 }} animate={{ rotateX: 0 }} type="text" id="ProjectName" />
				</div>
				<div className="color-input">
					<p>Project Color</p>
					<div className="color-list">
						{
							colors.map((color, index) => {
								return <Color color={{color, index}} key={index}/>
							})
						}
					</div>
				</div>
				<motion.button initial={{ rotateX: 90 }} animate={{ rotateX: 0 }} onClick={saveProject}>Create Project</motion.button>
			</div>
			
		</div>
	)
}

function Color({color}: { color: {color: string, index: number}}) {

	const dispatch = useDispatch();
	const projectColorState = useSelector((store: RootState) => store.projectColorState)

	return (
		<motion.div 
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			whileTap={{ scale: 1.1 }}
		style={{
			backgroundColor: projectColorState.index == color.index ? color.color : `${color.color}60`,
			border: `2px solid ${color.color}`
		}} onClick={() => {
			dispatch(setProjectColor({color: color.color, index: color.index}))
		}} className="color"></motion.div>
	)
}