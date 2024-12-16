"use client"
import React, { useRef } from "react";

export default function App() {

	const projectListRef = useRef<HTMLDivElement>(null);

	const scrollProjectRight = () => {
		projectListRef.current!.scrollBy(260, 0);
	}

	const scrollProjectLeft = () => {
		projectListRef.current!.scrollBy(-260, 0);
	}

	return (
		<div id={"notes-view"}>

			<div className="project-list-container">
				<div className="top-bar">
					<h1>My Projects</h1>
					<div>
						<svg onClick={scrollProjectLeft} width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="currentColor"></path></g></svg>
						<svg onClick={scrollProjectRight} width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</div>
				</div>
				<div className="main">
					<div ref={projectListRef} className="project-list">
						<Project/>
						<Project/>
						<Project/>
						<Project/>
						<Project/>
						<Project/>
						<Project/>
						<Project/>
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

function Project() {
	return (
		<div className={"project"}>
			<svg className="moreBtn" width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="Group">
					<g id="Group">
						<rect id="Rectangle" width="12" height="12" fill="#000000" fill-rule="evenodd" fill-opacity="0"/>
						<path id="Oval" d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1Z" fill="#000000" fill-rule="evenodd" transform="translate(5 5)"/>
						<path id="Oval" d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1Z" fill="#000000" fill-rule="evenodd" transform="translate(8.5 5)"/>
						<path id="Oval" d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1Z" fill="#000000" fill-rule="evenodd" transform="translate(1.5 5)" /></g></g></svg>
			<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g><rect width="64" height="64" /><path id="Shape" d="M0.184933 8.68904C0 9.6692 0 10.8459 0 13.1993C0 13.1993 0 32 0 32C0 42.0565 0 47.0851 3.12419 50.2091C6.2484 53.3333 11.2767 53.3333 21.3333 53.3333C21.3333 53.3333 32 53.3333 32 53.3333C42.0565 53.3333 47.0851 53.3333 50.2091 50.2091C53.3333 47.0851 53.3333 42.0565 53.3333 32C53.3333 32 53.3333 26.1277 53.3333 26.1277C53.3333 19.1081 53.3333 15.5983 51.2813 13.3169C51.0928 13.107 50.8931 12.9073 50.6832 12.7186C48.4016 10.6667 44.892 10.6667 37.8723 10.6667C37.8723 10.6667 36.8757 10.6667 36.8757 10.6667C33.7992 10.6667 32.2611 10.6667 30.8277 10.2581C30.0403 10.0336 29.2811 9.71923 28.5656 9.32115C27.2632 8.59645 26.1755 7.50875 24 5.33333C24 5.33333 22.5325 3.866 22.5325 3.866C21.8035 3.13688 21.4389 2.77229 21.0558 2.45469C19.4041 1.08544 17.3777 0.246107 15.2415 0.0463467C14.746 0 14.2305 0 13.1993 0C10.8459 0 9.6692 0 8.68904 0.184933C4.37416 0.99904 0.99904 4.37416 0.184933 8.68904C0.184933 8.68904 0.184933 8.68904 0.184933 8.68904Z" fill="#000000" fill-rule="evenodd" transform="translate(5.333 4.667)" /></g></svg>
			<div>
				<p>12 Notes</p>
				<h1>Todo Application</h1>
				<h3>12/12/2001</h3>
			</div>
		</div>
	)
}


function Note() {
	return (
		<div className="note">
			<div className="title-bar">
				<div className="tag"><svg width="20" height="20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g><rect width="64" height="64"/><path id="Shape" d="M0.184933 8.68904C0 9.6692 0 10.8459 0 13.1993C0 13.1993 0 32 0 32C0 42.0565 0 47.0851 3.12419 50.2091C6.2484 53.3333 11.2767 53.3333 21.3333 53.3333C21.3333 53.3333 32 53.3333 32 53.3333C42.0565 53.3333 47.0851 53.3333 50.2091 50.2091C53.3333 47.0851 53.3333 42.0565 53.3333 32C53.3333 32 53.3333 26.1277 53.3333 26.1277C53.3333 19.1081 53.3333 15.5983 51.2813 13.3169C51.0928 13.107 50.8931 12.9073 50.6832 12.7186C48.4016 10.6667 44.892 10.6667 37.8723 10.6667C37.8723 10.6667 36.8757 10.6667 36.8757 10.6667C33.7992 10.6667 32.2611 10.6667 30.8277 10.2581C30.0403 10.0336 29.2811 9.71923 28.5656 9.32115C27.2632 8.59645 26.1755 7.50875 24 5.33333C24 5.33333 22.5325 3.866 22.5325 3.866C21.8035 3.13688 21.4389 2.77229 21.0558 2.45469C19.4041 1.08544 17.3777 0.246107 15.2415 0.0463467C14.746 0 14.2305 0 13.1993 0C10.8459 0 9.6692 0 8.68904 0.184933C4.37416 0.99904 0.99904 4.37416 0.184933 8.68904C0.184933 8.68904 0.184933 8.68904 0.184933 8.68904Z" fill="currentColor" fill-rule="evenodd" transform="translate(5.333 4.667)"/></g></svg>Movie Website</div>
				<svg className="moreBtn" width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="Group">
						<g id="Group">
							<rect id="Rectangle" width="12" height="12" fill="#000000" fill-rule="evenodd" fill-opacity="0"/>
							<path id="Oval" d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1Z" fill="#000000" fill-rule="evenodd" transform="translate(5 5)"/>
							<path id="Oval" d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1Z" fill="#000000" fill-rule="evenodd" transform="translate(8.5 5)"/>
							<path id="Oval" d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1Z" fill="#000000" fill-rule="evenodd" transform="translate(1.5 5)"/>
						</g>
					</g>
				</svg>
			</div>
			<div className="main">
				<h1>Movie Website</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi in magni nulla odio recusandae rem, sed soluta! Alias culpa dolor esse quas quod. Iste mollitia officia sapiente vel voluptate.</p>
			</div>
			<div className="footer">
				<p>Sunday 12, 2001</p>
				<svg viewBox="0 0 24 24" width="2rem" height="2rem" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
							fill="currentColor"></path>
					</g>
				</svg>
			</div>
		</div>
	)
}