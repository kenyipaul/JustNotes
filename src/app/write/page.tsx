"use client"
import Quill from "quill"
import "quill/dist/quill.snow.css";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { setNavbarState } from "@/store/states/navbarState";

export default function App() {

    const route = useRouter();

    const dispatch = useDispatch();
    const navbarState = useSelector((store: RootState) => store.navbarState);

    useEffect(() => {
        dispatch(setNavbarState(false));
        
        return () => {
            dispatch(setNavbarState(true));
        }
    }, [])


    useEffect(() => {

        new Quill("#editor", {
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    // ['bold', 'italic', 'underline', 'strike', {'script': 'sub'}, {'script': 'super'}],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, {'align': []}],
                    ['link', 'formula'],
                    ['blockquote', 'code-block'],
                    ['clean'],
                ]
            },
            placeholder: "",
            theme: 'snow' // or 'bubble'
        })

    }, [])

    return (
        <div id="note-writer-view">
            <motion.div
            initial={{ translateY: -90 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.5 }}
            
            className="top-bar">
                <h1 onClick={() => route.push("/")}>JUSTNOTES</h1>
                <button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 20V15H9V20M18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V18C20 19.1046 19.1046 20 18 20Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>Save Note</button>
            </motion.div>

            <div className="main">
                <input type="text" id="title" placeholder="Note title" />
                <div id="editor"></div>
            </div>
        </div>
    )
}